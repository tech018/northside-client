import firebase from "firebase/app";
import "firebase/auth";
import AppButton from "@components/button";
import Public from "@layouts/Public";
import AppIcons from "@constants/icons";
import AppInput from "@components/inputs";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { loginSchema } from "@schema/login";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { gql, useQuery } from "@apollo/client";

const GET_USER = gql`
  query GetUser($email: String) {
    getUser(email: $email) {
      user {
        email
        name
        id
      }
      message
      code
    }
  }
`;

export default function Login() {
  const [email, setEmail] = useState("sojda018@gmail.com");
  const { loading, error, data } = useQuery(GET_USER, {
    variables: { email },
  });

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

  useEffect(() => {
    firebase.auth().onAuthStateChanged((userCred) => {
      if (userCred) {
        userCred.getIdTokenResult().then((token) => {
          if (token) {
            window.localStorage.setItem("token", JSON.stringify(token));
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
          console.log("userCred", userCred.user.email);
        }
      })
      .catch((err) => {
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
            style={{
              border: "1px solid rgba(0, 0, 0, 0.518)",
              borderRadius: "6px",
            }}
            className="border-solid  rounded-sm border-stone-600 py-8 px-8 space-y-6 drop-shadow-sm"
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
                type="button"
                variant="withicon"
                handlePress={SignInWithGoogle}
                icon={AppIcons["google"]}
              />
            </div>
            <div className="text-sm text-end">
              <Link
                to="#"
                className="font-semibold text-slate-500 hover:text-indigo-500"
              >
                Forgot password?
              </Link>
            </div>
          </form>
        </div>
      </div>
    </Public>
  );
}
