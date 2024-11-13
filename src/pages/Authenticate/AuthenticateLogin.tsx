import { Link } from "react-router-dom";
import { EnvelopeIcon, LockClosedIcon } from "@heroicons/react/24/outline";
import classnames from "classnames";
import { useForm } from "react-hook-form";
import InputIcon from "../../components/InputIcon/InputIcon";
import PrimaryButton from "../../components/PrimaryButton/PrimaryButton";
import { useNavigate } from "react-router-dom";

export default function AuthenticateLogin() {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();

  const handleSignIn = () => {
    // Navigate to the Dashboard component
    navigate("/dashboard");
  };
  const onSubmit = (data: any) => {
    // Handle form submission
    console.log(data);
  };

  return (
    <form
      className={classnames(
        "mt-10 ml-10 opacity-90",
        "py-8 gap-4 items-center justify-center flex flex-col h-[400px]",
        "bg-[#1d3e41] shadow-md",
        "rounded-xl px-4 md:px-5 lg:px-6"
      )}
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="flex flex-col items-center w-full gap-4 mx-6">
        <h1 className="text-xl font-semibold text-white">Login</h1>

        <InputIcon
          icon={<EnvelopeIcon />}
          type="text"
          placeholder="email address or phone number"
          register={register}
          label="credentialId"
        />

        <InputIcon
          icon={<LockClosedIcon />}
          placeholder="password"
          type="password"
          register={register}
          label="password"
          autoComplete="current-password"
        />

        <button className="inline-flex flex-col items-center justify-center h-10 text-sm bg-white bg-opacity-0 rounded-lg w-44">
          <div className="px-3 py-1.5 justify-center items-center inline-flex">
            <div className="flex items-center justify-center gap-2">
              <Link
                to="/forget-password"
                className="font-semibold leading-7 tracking-wide capitalize text-gray-100"
              >
                Forget Password?
              </Link>
            </div>
          </div>
        </button>

        <PrimaryButton text="Sign in" onClick={handleSignIn} />
      </div>
    </form>
  );
}
