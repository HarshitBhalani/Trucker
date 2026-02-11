"use client";

import React, { useEffect, useState } from "react";
import Badge from "@/components/ui/badge/Badge";
import {
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

/* ================= TYPES ================= */
type TruckType = "OPEN" | "CLOSED";

type Truck = {
  id: number;
  truckName: string;
  truckNumber: string;
  truckType: TruckType;
  feet: string;
  wheelsOrAxle: string;
  ton: string;
  height: string;
  submittedAt: string;
  status: "Active";
};

export default function TruckPage() {
  const [isOpen, setIsOpen] = useState(false);
  const [trucks, setTrucks] = useState<Truck[]>([]);
  const [errors, setErrors] = useState<any>({});

  const initialForm = {
    truckName: "",
    truckNumber: "",
    truckType: "OPEN" as TruckType,
    feet: "",
    wheelsOrAxle: "",
    ton: "",
    height: "",
    customTon: "",
    customHeight: "",
  };

  const [form, setForm] = useState(initialForm);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
  }, [isOpen]);

  /* ================= OPTIONS ================= */

  const openFeet = ["14ft", "17ft", "20ft", "22ft", "24ft"];
  const closedFeet = ["14ft", "17ft", "20ft", "22ft", "24ft", "40ft", "42ft"];

  const openWheels = ["10wl", "12wl", "14wl", "16wl", "18wl"];
  const closedAxle = [
    "Single Axle",
    "Multi Axle",
    "Single Axle HC",
    "Multi Axle HC",
    "Triple Axle",
  ];

  const tonOptions = [
    "4","6","7","8","9","10","15","18","20","24","25","40","45","Other"
  ];

  const heightOptions = [
    "8","8.5","9","9.5","10","10.5","11","11.5","12","Other"
  ];

  /* ================= VALIDATION ================= */

  const validate = () => {
    const e: any = {};

    if (!form.truckName.trim()) e.truckName = "Truck name required";
    if (!form.truckNumber.trim()) e.truckNumber = "Truck number required";
    if (!form.feet) e.feet = "Select feet";
    if (!form.wheelsOrAxle) e.wheelsOrAxle = "Select option";
    if (!form.ton) e.ton = "Select ton";
    if (!form.height) e.height = "Select height";

    if (form.ton === "Other" && !form.customTon)
      e.customTon = "Enter custom ton";

    if (form.height === "Other" && !form.customHeight)
      e.customHeight = "Enter custom height";

    setErrors(e);
    return Object.keys(e).length === 0;
  };

  /* ================= SUBMIT ================= */

  const handleSubmit = () => {
    if (!validate()) return;

    const newTruck: Truck = {
      id: Date.now(),
      truckName: form.truckName,
      truckNumber: form.truckNumber,
      truckType: form.truckType,
      feet: form.feet,
      wheelsOrAxle: form.wheelsOrAxle,
      ton: form.ton === "Other" ? form.customTon : form.ton,
      height: form.height === "Other" ? form.customHeight : form.height,
      submittedAt: new Date().toLocaleString(),
      status: "Active",
    };

    setTrucks((prev) => [...prev, newTruck]);
    setForm(initialForm);
    setErrors({});
    setIsOpen(false);
  };

  /* ================= OPTION BUTTON ================= */

  const OptionButton = ({ value, selected, onClick }: any) => (
    <button
      type="button"
      onClick={onClick}
      className={`px-3 py-1.5 text-xs rounded-lg border transition ${
        selected
          ? "bg-orange-500 text-white border-orange-500"
          : "bg-gray-100 dark:bg-gray-800 border-gray-300 dark:border-gray-600 hover:border-orange-400"
      }`}
    >
      {value}
    </button>
  );

  /* ================= RENDER ================= */

  return (
    <div className="space-y-8">

      {/* HEADER */}
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold text-gray-900 dark:text-white">
          Truck Management
        </h1>
        <button
          onClick={() => setIsOpen(true)}
          className="rounded-lg bg-orange-500 px-4 py-2 text-sm font-medium text-white hover:bg-orange-600"
        >
          + Add Truck
        </button>
      </div>

      {/* TABLE (UNCHANGED UI) */}
      {trucks.length > 0 && (
        <div className="max-w-5xl overflow-hidden rounded-2xl border border-gray-200 bg-white dark:border-white/[0.05] dark:bg-white/[0.03]">
          <Table className="w-full table-fixed">
            <TableHeader className="border-b border-gray-100 dark:border-white/[0.05]">
              <TableRow>
                <TableCell isHeader className="px-6 py-4 text-xs font-semibold text-gray-500 dark:text-gray-400">Truck Name</TableCell>
                <TableCell isHeader className="px-6 py-4 text-xs font-semibold text-gray-500 dark:text-gray-400">Number</TableCell>
                <TableCell isHeader className="px-6 py-4 text-xs font-semibold text-gray-500 dark:text-gray-400">Type</TableCell>
                <TableCell isHeader className="px-6 py-4 text-xs font-semibold text-gray-500 dark:text-gray-400">Feet</TableCell>
                <TableCell isHeader className="px-6 py-4 text-xs font-semibold text-gray-500 dark:text-gray-400">Wheels/Axle</TableCell>
                <TableCell isHeader className="px-6 py-4 text-xs font-semibold text-gray-500 dark:text-gray-400">TON</TableCell>
                <TableCell isHeader className="px-6 py-4 text-xs font-semibold text-gray-500 dark:text-gray-400">Height</TableCell>
                <TableCell isHeader className="px-6 py-4 text-xs font-semibold text-gray-500 dark:text-gray-400">Date</TableCell>
                <TableCell isHeader className="px-6 py-4 text-xs font-semibold text-gray-500 dark:text-gray-400">Status</TableCell>
              </TableRow>
            </TableHeader>

            <TableBody className="divide-y divide-gray-100 dark:divide-white/[0.05]">
              {trucks.map((t) => (
                <TableRow key={t.id}>
                  <TableCell className="px-6 py-4 font-medium text-gray-900 dark:text-white">{t.truckName}</TableCell>
                  <TableCell className="px-6 py-4 text-gray-500 dark:text-gray-400">{t.truckNumber}</TableCell>
                  <TableCell className="px-6 py-4 text-gray-500 dark:text-gray-400">{t.truckType}</TableCell>
                  <TableCell className="px-6 py-4 text-gray-500 dark:text-gray-400">{t.feet}</TableCell>
                  <TableCell className="px-6 py-4 text-gray-500 dark:text-gray-400">{t.wheelsOrAxle}</TableCell>
                  <TableCell className="px-6 py-4 text-gray-500 dark:text-gray-400">{t.ton} MT</TableCell>
                  <TableCell className="px-6 py-4 text-gray-500 dark:text-gray-400">{t.height} ft</TableCell>
                  <TableCell className="px-6 py-4 text-gray-500 dark:text-gray-400">{t.submittedAt}</TableCell>
                  <TableCell className="px-6 py-4">
                    <Badge size="sm" color="success">Active</Badge>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      )}

      {/* MODAL */}
      {/* MODAL */}
{isOpen && (
  <>
    {/* OVERLAY WITH BLUR */}
    <div
      className="fixed inset-0 z-[999] bg-black/60 backdrop-blur-sm transition-all duration-300"
      onClick={() => setIsOpen(false)}
    />

    {/* MODAL CONTAINER */}
    <div className="fixed inset-0 z-[1000] flex items-center justify-center px-4">
      <div className="relative w-full max-w-4xl rounded-2xl bg-white p-6 shadow-2xl dark:bg-gray-900 overflow-y-auto max-h-[90vh] animate-in fade-in zoom-in-95 duration-200">

        {/* CLOSE BUTTON */}
        <button
          onClick={() => setIsOpen(false)}
          className="absolute right-4 top-4 text-gray-400 hover:text-gray-700 dark:hover:text-white"
        >
          ✕
        </button>

        <h2 className="mb-6 text-lg font-semibold text-gray-900 dark:text-white">
          Add Truck
        </h2>

        {/* BASIC INFO */}
        <div className="grid grid-cols-2 gap-4 mb-6">
          <input
            placeholder="Truck Name"
            value={form.truckName}
            onChange={(e) => setForm({ ...form, truckName: e.target.value })}
            className={`w-full rounded-lg border px-3 py-2 text-sm 
            ${errors.truckName ? "border-red-500" : "border-gray-300"} 
            bg-gray-50 dark:border-gray-700 dark:bg-gray-800 dark:text-white`}
          />
          <input
            placeholder="Truck Number"
            value={form.truckNumber}
            onChange={(e) => setForm({ ...form, truckNumber: e.target.value })}
            className={`w-full rounded-lg border px-3 py-2 text-sm 
            ${errors.truckNumber ? "border-red-500" : "border-gray-300"} 
            bg-gray-50 dark:border-gray-700 dark:bg-gray-800 dark:text-white`}
          />
        </div>

        {/* TYPE */}
        <div className="flex gap-3 mb-6">
          {["OPEN", "CLOSED"].map((type) => (
            <OptionButton
              key={type}
              value={type}
              selected={form.truckType === type}
              onClick={() =>
                setForm({
                  ...form,
                  truckType: type as TruckType,
                  feet: "",
                  wheelsOrAxle: "",
                })
              }
            />
          ))}
        </div>

        {/* FEET */}
        <div className="mb-6">
          <p className="text-xs mb-2 text-gray-500 dark:text-gray-400">
            Select Feet
          </p>
          <div className="flex flex-wrap gap-2">
            {(form.truckType === "OPEN" ? openFeet : closedFeet).map((item) => (
              <OptionButton
                key={item}
                value={item}
                selected={form.feet === item}
                onClick={() => setForm({ ...form, feet: item })}
              />
            ))}
          </div>
          {errors.feet && (
            <p className="text-red-500 text-xs mt-2">{errors.feet}</p>
          )}
        </div>

        {/* WHEELS / AXLE */}
        <div className="mb-6">
          <p className="text-xs mb-2 text-gray-500 dark:text-gray-400">
            {form.truckType === "OPEN"
              ? "Select Wheels"
              : "Select Axle Type"}
          </p>
          <div className="flex flex-wrap gap-2">
            {(form.truckType === "OPEN"
              ? openWheels
              : closedAxle
            ).map((item) => (
              <OptionButton
                key={item}
                value={item}
                selected={form.wheelsOrAxle === item}
                onClick={() =>
                  setForm({ ...form, wheelsOrAxle: item })
                }
              />
            ))}
          </div>
          {errors.wheelsOrAxle && (
            <p className="text-red-500 text-xs mt-2">
              {errors.wheelsOrAxle}
            </p>
          )}
        </div>

        {/* TON */}
        <div className="mb-6">
          <p className="text-xs mb-2 text-gray-500 dark:text-gray-400">
            TON (MT)
          </p>
          <div className="flex flex-wrap gap-2">
            {tonOptions.map((item) => (
              <OptionButton
                key={item}
                value={item}
                selected={form.ton === item}
                onClick={() => setForm({ ...form, ton: item })}
              />
            ))}
          </div>

          {form.ton === "Other" && (
            <input
              type="number"
              placeholder="Enter Ton"
              value={form.customTon}
              onChange={(e) =>
                setForm({ ...form, customTon: e.target.value })
              }
              className="mt-3 w-full rounded-lg border border-gray-300 px-3 py-2 text-sm dark:border-gray-700 dark:bg-gray-800 dark:text-white"
            />
          )}
          {errors.ton && (
            <p className="text-red-500 text-xs mt-2">{errors.ton}</p>
          )}
        </div>

        {/* HEIGHT */}
        <div className="mb-6">
          <p className="text-xs mb-2 text-gray-500 dark:text-gray-400">
            Height (FT)
          </p>
          <div className="flex flex-wrap gap-2">
            {heightOptions.map((item) => (
              <OptionButton
                key={item}
                value={item}
                selected={form.height === item}
                onClick={() => setForm({ ...form, height: item })}
              />
            ))}
          </div>

          {form.height === "Other" && (
            <input
              type="number"
              placeholder="Enter Height"
              value={form.customHeight}
              onChange={(e) =>
                setForm({ ...form, customHeight: e.target.value })
              }
              className="mt-3 w-full rounded-lg border border-gray-300 px-3 py-2 text-sm dark:border-gray-700 dark:bg-gray-800 dark:text-white"
            />
          )}
          {errors.height && (
            <p className="text-red-500 text-xs mt-2">
              {errors.height}
            </p>
          )}
        </div>

        {/* SUBMIT */}
        <div className="flex justify-end mt-6">
          <button
            onClick={handleSubmit}
            className="rounded-lg bg-orange-500 px-6 py-2.5 text-sm font-medium text-white hover:bg-orange-600"
          >
            Submit Truck
          </button>
        </div>
      </div>
    </div>
  </>
)}

    </div>
  );
}
