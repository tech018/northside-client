import useAppStore from "@store";
import Public from "@layouts/public";
import AppInput from "@components/inputs";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

const UserConfig = () => {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    // resolver: yupResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });
  const { user } = useAppStore((state) => ({
    user: state.user,
  }));
  console.log("user", user);
  return (
    <Public>
      <div className="mt-20 mb-20 w-1/2 m-auto shadow-md">
        {/* <div className="w-3/12 bg-red-400 ">
          <img
            className="inline-block h-20 w-20 rounded-full  mx-16 my-10 ring-2 ring-white "
            src={user?.photoURL}
            alt=""
          />
        </div> */}
        <div className="w-full bg-gray-100 shadow-lg p-10 divide-y divide-dashed">
          <h2 className="text-slate-500 mb-2 text-center">
            Profile Confirmation
          </h2>
          <div className="flex-wrap flex items-center mt-2">
            <img
              className=" inline-block h-20 w-20 rounded-full ring-2 ring-white mt-4"
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
              <form>
                {user?.mobile === null && (
                  <AppInput
                    variant="default"
                    name="mobile"
                    label="Mobile Number"
                    type="text"
                    control={control}
                    error={errors}
                  />
                )}
                <AppInput
                  variant="address"
                  name="address"
                  label="Address"
                  control={control}
                  error={errors}
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    </Public>
  );
};

export default UserConfig;
