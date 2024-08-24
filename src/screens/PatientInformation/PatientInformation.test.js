import React from "react";
import { render, screen, fireEvent, within } from "@testing-library/react";
import "@testing-library/jest-dom";
import { BrowserRouter } from "react-router-dom";
import { usePatientInfoContext } from "../../PatientInfoContext";
import PatientInformation from "./PatientInformation";
import { questions } from "./questionsConfig"; // Import the questions from the config

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

    const weightQuestion = questions.find((q) => q.id === "weight");
    const heightQuestion = questions.find((q) => q.id === "height");

    screen.debug(); // Inspect the DOM to confirm element structure

    const weightLabel = screen.getByText(
      new RegExp(weightQuestion.question, "i"),
    );
    const weightInput = within(
      weightLabel.closest(".inputContainer"),
    ).getByRole("textbox");

    fireEvent.change(weightInput, { target: { value: "150" } });

    const heightLabel = screen.getByText(
      new RegExp(heightQuestion.question, "i"),
    );
    const heightInput = within(
      heightLabel.closest(".inputContainer"),
    ).getByRole("textbox");

    fireEvent.change(heightInput, { target: { value: `5'10"` } });

    // Submit the answers
    fireEvent.click(screen.getByText("Submit"));

    // Check if setPatientInfoMock was called with BMI
    expect(setPatientInfoMock).toHaveBeenCalledWith(
      expect.objectContaining({ bmi: expect.any(String) }),
    );
  });
});
