import { describe, expect, it, vi } from "vitest";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import BookingForm from "./BookingForm.jsx";

describe("BookingForm", () => {
  it("renders the required booking controls", () => {
    render(<BookingForm availableTimes={["17:00", "18:00"]} onDateChange={vi.fn()} onSubmit={vi.fn()} submitting={false} />);
    expect(screen.getByLabelText(/choose date/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/choose time/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/number of guests/i)).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /confirm reservation/i })).toBeInTheDocument();
  });

  it("loads the supplied available time options", () => {
    render(<BookingForm availableTimes={["17:00", "18:00"]} onDateChange={vi.fn()} onSubmit={vi.fn()} submitting={false} />);
    expect(screen.getByRole("option", { name: "17:00" })).toBeInTheDocument();
    expect(screen.getByRole("option", { name: "18:00" })).toBeInTheDocument();
  });

  it("shows validation errors and does not submit an invalid form", async () => {
    const onSubmit = vi.fn();
    render(<BookingForm availableTimes={["17:00"]} onDateChange={vi.fn()} onSubmit={onSubmit} submitting={false} />);
    await userEvent.click(screen.getByRole("button", { name: /confirm reservation/i }));
    expect(await screen.findByText("Choose an available time.")).toBeInTheDocument();
    expect(screen.getByText("Enter your name.")).toBeInTheDocument();
    expect(onSubmit).not.toHaveBeenCalled();
  });

  it("calls onDateChange when the date changes", () => {
    const onDateChange = vi.fn();
    render(<BookingForm availableTimes={["17:00"]} onDateChange={onDateChange} onSubmit={vi.fn()} submitting={false} />);
    const dateInput = screen.getByLabelText(/choose date/i);
    const date = new Date();
    date.setDate(date.getDate() + 3);
    const nextDate = date.toISOString().slice(0, 10);
    fireEvent.change(dateInput, { target: { value: nextDate } });
    expect(onDateChange).toHaveBeenCalledWith(nextDate);
  });
});
