import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import '@testing-library/jest-dom';
import { BrowserRouter } from "react-router-dom";
import { usePatientInfoContext } from "../../PatientInfoContext";
import PatientInformation from "./PatientInformation";

// Mock the usePatientInfoContext hook
jest.mock("../../PatientInfoContext", () => ({
  usePatientInfoContext: jest.fn(),
}));

describe("PatientInformation Component", () => {
  beforeEach(() => {
    usePatientInfoContext.mockReturnValue({
      patientInfo: {},
      setPatientInfo: jest.fn(),
    });
  });

  test("renders initial chat message", () => {
    render(
      <BrowserRouter>
        <PatientInformation />
      </BrowserRouter>,
    );

    expect(
      screen.getByText(
        /Hi there! I'm going to ask you a few questions to get to know you better./i,
      ),
    ).toBeInTheDocument();
  });

  test("transitions to the first question on Start button click", () => {
    render(
      <BrowserRouter>
        <PatientInformation />
      </BrowserRouter>,
    );

    // Click the Start button
    fireEvent.click(screen.getByText("Start"));

    // Check if the first question is rendered
    expect(
      screen.getByText(/Your first question text here/),
    ).toBeInTheDocument();
  });

  test("handles user input and moves to the next question", () => {
    render(
      <BrowserRouter>
        <PatientInformation />
      </BrowserRouter>,
    );

    // Start the questionnaire
    fireEvent.click(screen.getByText("Start"));

    // Simulate user input for the first question
    fireEvent.change(screen.getByRole("textbox"), {
      target: { value: "User answer" },
    });

    // Submit the answer
    fireEvent.click(screen.getByText("Submit"));

    // Check if the next question is rendered
    expect(
      screen.getByText(/Your next question text here/),
    ).toBeInTheDocument();
  });

  test("calculates BMI when weight and height are provided", () => {
    const setPatientInfoMock = jest.fn();

    usePatientInfoContext.mockReturnValue({
      patientInfo: {},
      setPatientInfo: setPatientInfoMock,
    });

    render(
      <BrowserRouter>
        <PatientInformation />
      </BrowserRouter>,
    );

    // Start the questionnaire
    fireEvent.click(screen.getByText("Start"));

    // Simulate user input for weight and height
    fireEvent.change(screen.getByLabelText("Weight"), {
      target: { value: "150" },
    });
    fireEvent.change(screen.getByLabelText("Height"), {
      target: { value: `5'10"` },
    });

    // Submit the answers
    fireEvent.click(screen.getByText("Submit"));

    // Check if setPatientInfoMock was called with BMI
    expect(setPatientInfoMock).toHaveBeenCalledWith(
      expect.objectContaining({ bmi: expect.any(String) }),
    );
  });
});
