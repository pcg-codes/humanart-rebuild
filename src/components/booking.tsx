import { bookingTimes, site, weekdays } from "@/data/site";
import { VisualLink } from "./visual-elements";

function StaticTextField({ label, placeholder, id }: { label: string; placeholder: string; id: string }) {
  return (
    <div className="fair-booking__form-field">
      <div className="visual-textfield" aria-disabled="true">
        <div className="form-control">
          <label className="form-control__label" htmlFor={id}>{label}</label>
          <div className="textfield is-disabled">
            <input className="textfield__input" id={id} type="text" placeholder={placeholder} disabled />
          </div>
          <div className="form-control__help-text" aria-hidden="true" />
        </div>
      </div>
    </div>
  );
}

export function Booking() {
  return (
    <section id="fair-booking" aria-labelledby="fair-booking-heading" className="container-fluid fair-booking">
      <div className="container fair-booking__container">
        <div className="row fair-booking__header-row">
          <div className="col-12 fair-booking__header-container">
            <div className="fair-booking__header">
              <h2 id="fair-booking-heading" className="fair-booking__headline">{site.bookingHeadline}</h2>
              <div className="fair-booking__description"><p>{site.bookingDescription}</p></div>
            </div>
          </div>
        </div>
        <div className="row fair-booking__content-row">
          <div className="col-12">
            <div className="fair-booking__content-container">
              <div className="fair-booking__card">
                <div className="row fair-booking__steps-row">
                  <div className="col-12 col-lg-6">
                    <div className="fair-booking__step">
                      <h3 className="fair-booking__step-title">1. Select date</h3>
                      <div className="fair-booking__calendar">
                        <div className="fair-booking__weekday-headers">
                          {weekdays.map((day, index) => <div key={index} className="fair-booking__weekday-header">{day}</div>)}
                        </div>
                        <div className="fair-booking__calendar-grid" />
                      </div>
                    </div>
                  </div>
                  <div className="col-12 col-lg-6">
                    <div className="fair-booking__step fair-booking__step--disabled">
                      <h3 className="fair-booking__step-title">2. Select time</h3>
                      <div className="fair-booking__filter-group">
                        {bookingTimes.map((time) => (
                          <span className="visual-filter-tag" key={time} aria-disabled="true">
                            <span className="filter-tag"><span className="filter-tag__label">{time}</span></span>
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="fair-booking__form-area fair-booking__step fair-booking__step--disabled">
                  <h3 className="fair-booking__step-title">3. Your details</h3>
                  <div className="fair-booking__form" aria-label="Booking form (visual only)">
                    <StaticTextField label="Name" placeholder="Your full name" id="booking-name" />
                    <StaticTextField label="E-mail" placeholder="name@example.com" id="booking-email" />
                    <div className="fair-booking__form-field fair-booking__form-field--checkbox">
                      <label className="fair-booking__checkbox-label">
                        <input className="fair-booking__checkbox-input" type="checkbox" disabled />
                        <span className="fair-booking__checkbox-text">
                          <span className="rich-text"><span className="payload-richtext">
                            Yes, I agree that Minitüb GmbH uses my data for this purpose in accordance with the{" "}
                            <VisualLink>data protection declaration</VisualLink>.
                          </span></span>
                        </span>
                      </label>
                    </div>
                    <span className="visual-button fair-booking__submit-button" aria-disabled="true">
                      <button className="button button--primary" type="button" disabled>
                        <span className="button__label">Book now</span>
                      </button>
                    </span>
                    <div className="fair-booking__feedback" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
