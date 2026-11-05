import { describe, expect, it } from "vitest";
import { validateBooking } from "./validation.js";

const futureDate = () => {
  const date = new Date();
  date.setDate(date.getDate() + 2);
  return date.toISOString().slice(0, 10);
};

describe("validateBooking", () => {
  it("returns no errors for valid booking details", () => {
    const values = { date: futureDate(), time: "18:00", guests: "2", occasion: "Birthday", name: "Alex Smith", email: "alex@example.com" };
    expect(validateBooking(values)).toEqual({});
  });

  it("requires a date, time, occasion, and name", () => {
    const errors = validateBooking({ date: "", time: "", guests: "2", occasion: "", name: " ", email: "alex@example.com" });
    expect(errors.date).toBeTruthy();
    expect(errors.time).toBeTruthy();
    expect(errors.occasion).toBeTruthy();
    expect(errors.name).toBeTruthy();
  });

  it("rejects dates in the past", () => {
    expect(validateBooking({ date: "2020-01-01", time: "18:00", guests: "2", occasion: "Other", name: "Alex", email: "a@b.com" }).date).toBeTruthy();
  });

  it("rejects guest counts outside the supported range", () => {
    const values = { date: futureDate(), time: "18:00", guests: "11", occasion: "Other", name: "Alex", email: "a@b.com" };
    expect(validateBooking(values).guests).toBeTruthy();
  });

  it("rejects malformed email addresses", () => {
    const values = { date: futureDate(), time: "18:00", guests: "2", occasion: "Other", name: "Alex", email: "not-an-email" };
    expect(validateBooking(values).email).toBeTruthy();
  });
});
