import UserAddressCard from "@/components/user-profile/UserAddressCard";
import UserInfoCard from "@/components/user-profile/UserInfoCard";
import UserMetaCard from "@/components/user-profile/UserMetaCard";
import UserDetails from "@/components/user-profile/UserDetails";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Profile | Dashboard",
  description: "User profile page",
};

export default function Profile() {
  return (
    <div>
      <div
        className="
          rounded-2xl
          border border-orange-200
          bg-orange-50/40
          p-5
          dark:border-gray-800
          dark:bg-gray-dark
          lg:p-6
        "
      >
        {/* ===== PAGE HEADING ===== */}
        <h3
          className="
            mb-5 text-lg font-semibold
            text-orange-700
            dark:text-orange-400
            lg:mb-7
          "
        >
          Profile
        </h3>

        {/* ===== PROFILE CARDS ===== */}
        <div className="space-y-6">
          <UserMetaCard />
          <UserInfoCard />
          <UserDetails />
          <UserAddressCard />
        </div>
      </div>
    </div>
  );
}
