import firebase from "firebase/app";
import "firebase/auth";
import { useEffect } from "react";
import { useState } from "react";
import AppButton from "@components/button";
import Public from "@layouts/Public";
import AppIcons from "@constants/icons";
import AppInput from "@components/inputs";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { loginSchema } from "@schema/login";
export default function Login() {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const [auth, setAuth] = useState(
    false || window.localStorage.getItem("auth")
  );
  const [token, setToken] = useState(null);

  useEffect(() => {
    firebase.auth().onAuthStateChanged((userCred) => {
      if (userCred) {
        setAuth(true);
        userCred.getIdTokenResult().then((token) => {
          if (token) {
            window.localStorage.setItem("auth", "true");
            setToken(token);
            console.log(token);
          }
        });
      }
    });
  }, []);

  const SignInWithGoogle = () => {
    firebase
      .auth()
      .signInWithPopup(new firebase.auth.GoogleAuthProvider())
      .then((userCred) => {
        if (userCred) {
          setAuth(true);
        }
      })
      .catch((err) => {
        setAuth(false);
        console.log("error login with google", err);
      });
  };

  const onSumit = (data) => {
    console.log(data);
  };

  return (
    <Public>
      <div className="flex min-h-full flex-1 flex-col justify-center px-12 py-12 lg:px-8 mt-10 md:mt-5">
        <div className="mt-10  rounded-sm sm:mx-auto sm:w-full sm:max-w-sm">
          <form
            className="border-2 border-solid  rounded-lg border-stone-300 py-8 px-8 space-y-6 drop-shadow-md"
            onSubmit={handleSubmit(onSumit)}
          >
            <AppInput
              variant="default"
              name="email"
              label="Email address"
              type="email"
              control={control}
              error={errors}
            />
            <AppInput
              variant="password"
              name="password"
              id="password"
              label="Password"
              type="password"
              control={control}
              error={errors}
            />

            <div className="text-center">
              <AppButton label="Sign in" type="submit" />
              <span>or</span>
              <AppButton
                label="Sign in with"
                type="submit"
                variant="withicon"
                handlePress={SignInWithGoogle}
                icon={AppIcons["google"]}
              />
            </div>
            <div className="text-sm text-end">
              <a
                href="#"
                className="font-semibold text-indigo-600 hover:text-indigo-500"
              >
                Forgot password?
              </a>
            </div>
          </form>
        </div>
      </div>
    </Public>
  );
}
