type Age = number;

type AgeActions = {
  type: "INCREASE" | "DECREASE";
};

export const ageReducer = (state: Age, action: AgeActions) => {
  switch (action.type) {
    case "INCREASE":
      return state + 1;

    case "DECREASE":
      state -= 1;
      break;
  }
  return state;
};
