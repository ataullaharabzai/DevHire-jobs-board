import Button from "../components/Button";
import Input from "../components/Input";

function Profile() {
  return (
    <section className="p-5 md:p-8 lg:p-10">
      <div className="mx-auto max-w-6xl rounded-4xl border border-slate-200 bg-[#f7f8ff] p-6 shadow-[0_20px_60px_-30px_rgba(20,60,244,0.35)] md:p-8">
        <div className="mb-8 space-y-4">
          <p className="text-sm uppercase tracking-[0.22em] text-[#143cf4]">
            Profile settings
          </p>
          <h1 className="text-3xl font-semibold text-slate-900 md:text-4xl">
            Create your professional profile
          </h1>
          <p className="max-w-3xl text-sm leading-7 text-slate-600 md:text-base">
            Add your details so the right employers can discover your
            experience, skills, and career goals.
          </p>
        </div>

        <form className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          <Input
            type="text"
            placeholder="Enter your name"
            className=""
            label="First Name"
            value=""
          />
          <Input
            type="text"
            placeholder="Enter your last name"
            className=""
            label="Last Name"
            value=""
          />
          <Input
            type="email"
            placeholder="Enter your email"
            className=""
            label="Email"
            value=""
          />
          <Input
            type="text"
            placeholder="Enter your profession"
            className=""
            label="Profession"
            value=""
          />
          <Input
            type="text"
            placeholder="Current location"
            className="lg:col-span-2"
            label="Location"
            value=""
          />
          <div className="lg:col-span-2 flex flex-col gap-3">
            <label className="text-sm font-semibold text-slate-700">
              About You
            </label>
            <textarea
              placeholder="Share your experience, top skills and career goals"
              className="min-h-42 resize-none rounded-2xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 shadow-sm transition duration-200 focus:border-[#143cf4] focus:outline-none focus:ring-2 focus:ring-[#143cf4]/10"
            />
          </div>

          <div className="lg:col-span-2 flex justify-end">
            <Button text="Create profile" visit="" className="bg-[#143cf4] text-white" />
          </div>
        </form>
      </div>
    </section>
  );
}

export default Profile;
