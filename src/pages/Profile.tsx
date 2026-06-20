import { useEffect, useState } from "react";
import Input from "../components/Input";

function Profile() {
  const emptyProfile = {
    firstName: "",
    lastName: "",
    email: "",
    location: "",
    profession: "",
    bio: "",
  };

  const [profile, setProfile] = useState(emptyProfile);
  const [savedProfile, setSavedProfile] = useState<typeof emptyProfile | null>(
    null,
  );
  const [isEditabel, setIsEditable] = useState(true);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    localStorage.setItem("profile", JSON.stringify(profile));
    setSavedProfile(profile);
    setProfile(emptyProfile);
    setIsEditable(false);
  };

  useEffect(() => {
    const savedProfile = localStorage.getItem("profile");

    if (savedProfile) {
      const parsed = JSON.parse(savedProfile);
      setSavedProfile(parsed);
      setIsEditable(false);
    }
  }, []);

  const handleDelete = () => {
    localStorage.removeItem("profile");
    setSavedProfile(null);
    setProfile(emptyProfile);
    setIsEditable(true);
  };

  const handleEdit = () => {
    if (savedProfile) {
      setProfile(savedProfile);
    }
    setIsEditable(true);
  };

  return (
    <section className="p-5 md:p-8 lg:p-10">
      {isEditabel ? (
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

          <form
            className="grid grid-cols-1 gap-6 lg:grid-cols-2"
            onSubmit={handleSubmit}
          >
            <Input
              type="text"
              placeholder="Enter your name"
              className=""
              label="First Name"
              value={profile.firstName}
              setValue={(e) =>
                setProfile({ ...profile, firstName: e.target.value })
              }
            />
            <Input
              type="text"
              placeholder="Enter your last name"
              className=""
              label="Last Name"
              value={profile.lastName}
              setValue={(e) =>
                setProfile({ ...profile, lastName: e.target.value })
              }
            />
            <Input
              type="email"
              placeholder="Enter your email"
              className=""
              label="Email"
              value={profile.email}
              setValue={(e) =>
                setProfile({ ...profile, email: e.target.value })
              }
            />
            <Input
              type="text"
              placeholder="Enter your profession"
              className=""
              label="Profession"
              value={profile.profession}
              setValue={(e) =>
                setProfile({ ...profile, profession: e.target.value })
              }
            />
            <Input
              type="text"
              placeholder="Current location"
              className="lg:col-span-2"
              label="Location"
              value={profile.location}
              setValue={(e) =>
                setProfile({ ...profile, location: e.target.value })
              }
            />
            <div className="lg:col-span-2 flex flex-col gap-3">
              <label className="text-sm font-semibold text-slate-700">
                About You
              </label>
              <textarea
                placeholder="Share your experience, top skills and career goals"
                className="min-h-42 resize-none rounded-2xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 shadow-sm transition duration-200 focus:border-[#143cf4] focus:outline-none focus:ring-2 focus:ring-[#143cf4]/10"
                value={profile.bio}
                onChange={(e) =>
                  setProfile({ ...profile, bio: e.target.value })
                }
              />
            </div>

            <div className="lg:col-span-2 flex justify-end">
              <button
                type="submit"
                className="px-5 py-3 bg-[#143cf4] text-white rounded-sm transition hover:bg-[#1026b0]"
              >
                Create Profile
              </button>
            </div>
          </form>
        </div>
      ) : (
        <div className="mx-auto max-w-6xl rounded-4xl border border-slate-200 bg-white p-6 shadow-[0_24px_80px_-40px_rgba(20,60,244,0.35)] md:p-8">
          <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr] items-start">
            <div className="space-y-4">
              <div className="rounded-[28px] bg-[#f0f4ff] p-6">
                <p className="text-xs uppercase tracking-[0.4em] text-[#143cf4]">
                  Profile saved
                </p>
                <h2 className="mt-3 text-3xl font-semibold text-slate-900">
                  {savedProfile?.firstName || "Your"} Profile Overview
                </h2>
                <p className="mt-2 max-w-2xl text-sm leading-7 text-slate-600">
                  Your professional details are now saved. Employers can review
                  your profile summary and contact information.
                </p>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-3xl border border-slate-200 bg-[#f7f8ff] p-5">
                  <p className="text-xs uppercase tracking-[0.3em] text-[#143cf4]">
                    Full Name
                  </p>
                  <p className="mt-3 text-lg font-semibold text-slate-900">
                    {savedProfile?.firstName} {savedProfile?.lastName}
                  </p>
                </div>
                <div className="rounded-3xl border border-slate-200 bg-[#f7f8ff] p-5">
                  <p className="text-xs uppercase tracking-[0.3em] text-[#143cf4]">
                    Profession
                  </p>
                  <p className="mt-3 text-lg font-semibold text-slate-900">
                    {savedProfile?.profession}
                  </p>
                </div>
                <div className="rounded-3xl border border-slate-200 bg-[#f7f8ff] p-5">
                  <p className="text-xs uppercase tracking-[0.3em] text-[#143cf4]">
                    Location
                  </p>
                  <p className="mt-3 text-lg font-semibold text-slate-900">
                    {savedProfile?.location}
                  </p>
                </div>
                <div className="rounded-3xl border border-slate-200 bg-[#f7f8ff] p-5">
                  <p className="text-xs uppercase tracking-[0.3em] text-[#143cf4]">
                    Email
                  </p>
                  <p className="mt-3 text-lg font-semibold text-slate-900">
                    {savedProfile?.email}
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-[28px] border border-slate-200 bg-[#f7f8ff] p-6 shadow-sm">
              <p className="text-sm uppercase tracking-[0.22em] text-[#143cf4]">
                About me
              </p>
              <p className="mt-4 text-sm leading-7 text-slate-700">
                {savedProfile?.bio || "You haven't provided a summary yet."}
              </p>
            </div>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-end">
              <button
                className="rounded-2xl border border-red-500 bg-white px-5 py-3 text-red-500 transition hover:text-white hover:bg-red-500"
                onClick={handleDelete}
              >
                Delete Profile
              </button>
              <button
                className="rounded-2xl bg-[#143cf4] px-5 py-3 text-white transition hover:bg-[#1026b0]"
                onClick={handleEdit}
              >
                Edit Profile
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default Profile;
