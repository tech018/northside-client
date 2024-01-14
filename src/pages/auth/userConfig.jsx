import useAppStore from "@store";
import Public from "@layouts/public";
import AppInput from "@components/inputs";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useEffect } from "react";
import AppButton from "@components/button";
import { profileConfigSchema } from "../../schema/login";

const UserConfig = () => {
  const {
    handleSubmit,
    control,
    formState: { errors },
    setValue,
    watch,
  } = useForm({
    resolver: yupResolver(profileConfigSchema),
    defaultValues: {
      mobile: "",
      address: "",
      enablepass: true,
      password: "",
    },
  });

  const enablePassword = watch("enablepass");
  console.log("enablePassword", enablePassword);
  const { user } = useAppStore((state) => ({
    user: state.user,
  }));

  useEffect(() => {
    setValue("mobile", user?.mobile);
  }, [setValue, user]);

  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <Public>
      <div className="mt-20 mb-20 w-1/2 m-auto shadow-md">
        <div className="w-full bg-slate-100 shadow-lg p-10 divide-y divide-dashed divide-y-1 divide-slate-400">
          <h2 className="text-slate-500 mb-2 text-center">
            Profile Confirmation
          </h2>
          <div className="flex-wrap flex items-center mt-4">
            <img
              className=" inline-block h-20 w-20 rounded-full ring-2 ring-white mt-6"
              src={user?.photoURL}
              alt=""
            />
            <div className="mx-10 inline-flex grap-2">
              <div>
                <span className="text-sm text-slate-500">Name</span>
                <h2 className="text-base font-bold uppercase ">{user?.name}</h2>
              </div>
              <div className="mx-10 ">
                <span className="text-sm text-slate-500">Email</span>
                <h2 className="text-base font-bold">{user?.email}</h2>
              </div>
            </div>
          </div>
          <div className="mt-5">
            <h1 className="text-slate-500 mb-2 text-center mt-5">
              Additional Information
            </h1>
            <div className="mt-5">
              <form onSubmit={handleSubmit(onSubmit)}>
                <AppInput
                  variant="default"
                  name="mobile"
                  label="Mobile Number"
                  type="text"
                  control={control}
                  error={errors}
                />
                <AppInput
                  variant="address"
                  name="address"
                  label="Home Address"
                  control={control}
                  error={errors}
                />
                <AppInput
                  variant="switch"
                  name="enablepass"
                  label="I want to set my password"
                  control={control}
                  error={errors}
                />
                {enablePassword && (
                  <AppInput
                    variant="password"
                    name="password"
                    label="Password"
                    type="password"
                    control={control}
                    error={errors}
                  />
                )}
                <br />
                <br />
                <AppButton label="Confirm" type="submit" />
              </form>
            </div>
          </div>
        </div>
      </div>
    </Public>
  );
};

export default UserConfig;
