import {
  State,
  useCustomActionState,
} from "../src/hooks/use-custom-action-state";
import { renderHook, act , waitFor} from "@testing-library/react";
import { describe, test, expect } from "vitest";

// Mock success action
const mockSuccessAction = async () => {
  return new Promise<number>((resolve) => {
    setTimeout(() => resolve(42), 100); // Simulate async action
  });
};

// Mock failure action
const mockFailureAction = async () => {
  return new Promise<number>((_, reject) => {
    setTimeout(() => reject(new Error("Action failed")), 100); // Simulate async action failure
  });
};

describe("useCustomActionState", () => {
 
  test("should initialize with the given initial state", () => {
    const initialState: State<number> = { data: null, error: null };

    const { result } = renderHook(() =>
      useCustomActionState(mockSuccessAction, initialState)
    );

    expect(result.current.state).toEqual(initialState);
    expect(result.current.isPending).toBe(false);
  });

  test("should update state with data when action resolves successfully", async () => {
    const initialState: State<number> = { data: null, error: null };

    const { result } = renderHook(() =>
      useCustomActionState(mockSuccessAction, initialState)
    );

    act(() => {
      result.current.run(); // Trigger the action
    });

    // Await for the state to update asynchronously
    await act(async () => {
      await new Promise((r) => setTimeout(r, 150)); // Wait for action to complete
    });

    // Check the updated state
    expect(result.current.state).toEqual({ data: 42, error: null });
    expect(result.current.isPending).toBe(false);
  });

  test("should update state with error when action rejects", async () => {
    const initialState: State<number> = { data: null, error: null };

    const { result } = renderHook(() =>
      useCustomActionState(mockFailureAction, initialState)
    );

    act(() => {
      result.current.run(); // Trigger the action
    });

    // Await for the state to update asynchronously
    await act(async () => {
      await new Promise((r) => setTimeout(r, 150)); // Wait for action to complete
    });

    // Check the updated state for error
    expect(result.current.state).toEqual({
      data: null,
      error: new Error("Action failed"),
    });
    expect(result.current.isPending).toBe(false);
  });
});
