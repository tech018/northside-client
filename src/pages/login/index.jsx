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
import { gql, useMutation } from "@apollo/client";
import { useNavigate } from "react-router-dom";

const LOGIN_USER = gql`
  mutation ($authUser: GoogleAuth) {
    googleAuth(authUser: $authUser) {
      code
      message
      redirectURL
      credentials {
        email
        mobile
        name
        photoURL
        token
      }
      message
      code
    }
  }
`;

export default function Login() {
  const navigate = useNavigate();
  const [loginUser, { loading, error }] = useMutation(LOGIN_USER, {
    context: {
      headers: {
        authorization: window.localStorage.getItem("accessToken"),
      },
    },
    onSubmit: () => {
      // setLoading(loading);
    },
    onCompleted: (data) => {
      navigate(`/${data.googleAuth.redirectURL}`);
    },
    onError: (error) => {
      // Handle errors
      console.error("Login error:", error);
    },
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
        userCred.getIdTokenResult().then((res) => {
          if (res) {
            window.localStorage.setItem("accessToken", res.token);
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
          loginUser({
            variables: {
              authUser: {
                name: userCred.user.displayName,
                email: userCred.user.email,
                photoURL: userCred.user.photoURL,
                mobile: userCred.user.phoneNumber,
              },
            },
          });
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
                type="button"
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
