import * as TokenUtils from "../../utils/tokenUtils";

export const fnDoLogout = async () => {
  await TokenUtils.removeToken();
  window.location.href = "/";
  window.localStorage.setItem("mode","light")
};

export const fnDoLogout2 = () => {
  TokenUtils.removeToken();
};
