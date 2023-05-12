import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import { toast } from "react-toastify";

const Booking = () => {
  const service = useLoaderData();
  const { title, img, price, _id } = service;
  const {user} = useContext(AuthContext)

  const handleBooking = event => {
    event.preventDefault()
    const form = event.target;
    const name = form.name.value;
    const email = user?.email;
    const date = form.date.value;
    const price = form.price.value;

    const booking = {
        customerName : name,
        email,
        date,
        img,
        price,
        service_name : title,
        service_id : _id
    }
    console.log(booking);

    fetch('http://localhost:5000/bookings', {
        method: 'POST',
        headers:{
            'content-type':'application/json'
        },
        body: JSON.stringify(booking)
    })
    .then(res => res.json())
    .then(data => {
        if(data.insertedId > 0){
            toast('Your selected service booked!')
        }
    })
  }
  return (
    <>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content">
          <div className="card w-full lg:w-4xl  shadow-2xl bg-base-100">
            <div className="card-body">
              <form onSubmit={handleBooking}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Name</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      placeholder="Your Name"
                      className="input input-bordered"
                    />
                  </div>

                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Email</span>
                    </label>
                    <input
                      type="text"
                      name="email"
                      defaultValue={user?.email}
                      placeholder="email"
                      className="input input-bordered"
                    />
                  </div>

                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Date</span>
                    </label>
                    <input
                      type="date"
                      name="date"
                      className="input input-bordered"
                    />
                  </div>

                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Due Amount</span>
                    </label>
                    <input
                      type="text"
                      name="price"
                      placeholder="Due Amount"
                      defaultValue={'$' + price}
                      className="input input-bordered"
                    />
                  </div>

                </div>
                  <div className="form-control mt-6">
                    <button className="btn btn-primary btn-block">Confirm Order</button>
                  </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Booking;
