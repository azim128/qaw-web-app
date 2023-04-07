import React, { useState } from "react";
import "./newsletter.css";
import { useMutation } from "react-query";
import { addSubscriber } from "../../api/Api";

const Newsletter = () => {
  const [newUser, setNewUser] = useState('');
  const addTodoMutation = useMutation(addSubscriber, {
    onSuccess: () => {
    }
})
  const handleSubmit = (e) => {
    e.preventDefault()
    addTodoMutation.mutate({ email:newUser})
    setNewUser('')
}
  return (
    <section id="Newsletter" className="container">
      <div className="footer-newsletter">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6">
              <h4>Join Our Newsletter</h4>
              <p>
                Tamen quem nulla quae legam multos aute sint culpa legam noster
                magna
              </p>
              <form onSubmit={handleSubmit}>
                <input
                  type="email"
                  name="email"
                  value={newUser}
                  onChange={(e) => setNewUser(e.target.value)}
                  placeholder="Enter mail"
                />
                <button  className="submit">Subscriber</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
