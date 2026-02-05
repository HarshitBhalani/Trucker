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
type Branch = {
  id: number;
  branchName: string;
  managerName: string;
  state: string;
  status: "Pending";
};

const STORAGE_KEY = "branches_data";

/* ================= COMPONENT ================= */
export default function BranchPage() {
  const [branches, setBranches] = useState<Branch[]>([]);
  const [open, setOpen] = useState(false);
  const [errors, setErrors] = useState<any>({});

  const [form, setForm] = useState({
    branchName: "",
    managerName: "",
    contact: "",
    address: "",
    city: "",
    state: "",
    pin: "",
    gstFile: null as File | null,
  });

  /* ================= LOAD FROM LOCAL STORAGE ================= */
  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      setBranches(JSON.parse(stored));
    }
  }, []);

  /* ================= SAVE TO LOCAL STORAGE ================= */
  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(branches));
  }, [branches]);

  /* ================= LOCK SCROLL ================= */
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "auto";
  }, [open]);

  /* ================= VALIDATION ================= */
  const validate = () => {
    const e: any = {};
    if (!form.branchName) e.branchName = "Branch name is required";
    if (!form.managerName) e.managerName = "Manager name is required";
    if (!/^\d{10}$/.test(form.contact))
      e.contact = "Enter valid 10-digit number";
    if (!form.address) e.address = "Address is required";
    if (!form.city) e.city = "City is required";
    if (!form.state) e.state = "State is required";
    if (!form.pin || form.pin.length < 4)
      e.pin = "PIN must be minimum 4 digits";
    if (!form.gstFile) e.gstFile = "GST certificate is mandatory";

    setErrors(e);
    return Object.keys(e).length === 0;
  };

  /* ================= SUBMIT ================= */
  const submit = () => {
    if (!validate()) return;

    const newBranch: Branch = {
      id: Date.now(),
      branchName: form.branchName,
      managerName: form.managerName,
      state: form.state,
      status: "Pending",
    };

    setBranches((prev) => [...prev, newBranch]);

    setForm({
      branchName: "",
      managerName: "",
      contact: "",
      address: "",
      city: "",
      state: "",
      pin: "",
      gstFile: null,
    });

    setErrors({});
    setOpen(false);
  };

  /* ================= DELETE ================= */
  const removeBranch = (id: number) => {
    setBranches((prev) => prev.filter((b) => b.id !== id));
  };

  return (
    <div className="space-y-8">
      {/* ================= HEADER ================= */}
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold text-gray-900 dark:text-white">
          Branch Management
        </h1>

        <button
          onClick={() => setOpen(true)}
          className="rounded-lg bg-orange-500 px-4 py-2 text-sm font-medium text-white
          hover:bg-orange-600 dark:bg-blue-600 dark:hover:bg-blue-700"
        >
          + Add Branch
        </button>
      </div>

      {/* ================= TABLE ================= */}
      {branches.length > 0 && (
        <div className="max-w-5xl overflow-hidden rounded-2xl border border-gray-200 bg-white dark:border-white/[0.05] dark:bg-white/[0.03]">
          <Table className="w-full table-fixed">
            <TableHeader className="border-b border-gray-100 dark:border-white/[0.05]">
              <TableRow>
                <TableCell isHeader className="w-[25%] px-6 py-4 text-xs font-semibold text-gray-500 dark:text-gray-400">
                  Branch Name
                </TableCell>
                <TableCell isHeader className="w-[25%] px-6 py-4 text-xs font-semibold text-gray-500 dark:text-gray-400">
                  Manager
                </TableCell>
                <TableCell isHeader className="w-[20%] px-6 py-4 text-xs font-semibold text-gray-500 dark:text-gray-400">
                  State
                </TableCell>
                <TableCell isHeader className="w-[15%] px-6 py-4 text-xs font-semibold text-gray-500 dark:text-gray-400">
                  Status
                </TableCell>
                <TableCell isHeader className="w-[15%] px-6 py-4 text-right text-xs font-semibold text-gray-500 dark:text-gray-400">
                  Action
                </TableCell>
              </TableRow>
            </TableHeader>

            <TableBody className="divide-y divide-gray-100 dark:divide-white/[0.05]">
              {branches.map((b) => (
                <TableRow key={b.id}>
                  <TableCell className="px-6 py-4 font-medium text-gray-900 dark:text-white">
                    {b.branchName}
                  </TableCell>
                  <TableCell className="px-6 py-4 text-gray-500 dark:text-gray-400">
                    {b.managerName}
                  </TableCell>
                  <TableCell className="px-6 py-4 text-gray-500 dark:text-gray-400">
                    {b.state}
                  </TableCell>
                  <TableCell className="px-6 py-4">
                    <Badge size="sm" color="warning">
                      Pending
                    </Badge>
                  </TableCell>
                  <TableCell className="px-6 py-4 text-right">
                    <button
                      onClick={() => removeBranch(b.id)}
                      className="text-sm font-medium text-red-500 hover:underline"
                    >
                      Remove
                    </button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      )}

      {/* ================= MODAL ================= */}
      {open && (
        <>
          <div
            className="fixed inset-0 z-40 bg-black/50"
            onClick={() => setOpen(false)}
          />

          <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
            <div className="relative w-full max-w-4xl rounded-2xl bg-white p-6 shadow-xl dark:bg-gray-dark">
              <button
                onClick={() => setOpen(false)}
                className="absolute right-4 top-4 text-gray-400 hover:text-gray-700 dark:hover:text-white"
              >
                ✕
              </button>

              <h2 className="mb-6 text-lg font-semibold text-gray-900 dark:text-white">
                Add Branch
              </h2>

              <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
                <Input label="Branch Name" value={form.branchName} error={errors.branchName}
                  onChange={(v:any)=>setForm({...form,branchName:v})} />
                <Input label="Manager Name" value={form.managerName} error={errors.managerName}
                  onChange={(v:any)=>setForm({...form,managerName:v})} />
                <Input label="Contact Number" value={form.contact} error={errors.contact}
                  onChange={(v:any)=>setForm({...form,contact:v})} />
                <Input label="Address" value={form.address} error={errors.address}
                  onChange={(v:any)=>setForm({...form,address:v})} />
                <Input label="City" value={form.city} error={errors.city}
                  onChange={(v:any)=>setForm({...form,city:v})} />
                <Input label="State" value={form.state} error={errors.state}
                  onChange={(v:any)=>setForm({...form,state:v})} />
                <Input label="Branch PIN" value={form.pin} error={errors.pin}
                  onChange={(v:any)=>setForm({...form,pin:v})} />
                <FileUpload file={form.gstFile} error={errors.gstFile}
                  onChange={(f:any)=>setForm({...form,gstFile:f})}
                  onRemove={()=>setForm({...form,gstFile:null})} />
              </div>

              <div className="mt-8 flex justify-end">
                <button
                  onClick={submit}
                  className="rounded-lg bg-orange-500 px-6 py-2.5 text-sm font-medium
                  text-white hover:bg-orange-600 dark:bg-blue-600 dark:hover:bg-blue-700"
                >
                  Submit Branch
                </button>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

/* ================= INPUT ================= */
function Input({ label, value, onChange, error }: any) {
  return (
    <div>
      <label className="mb-1 block text-xs font-medium text-gray-500">
        {label} <span className="text-red-500">*</span>
      </label>
      <input
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full rounded-lg border border-gray-300 bg-gray-50 px-3 py-2 text-sm
        dark:border-gray-700 dark:bg-gray-900 dark:text-white"
      />
      {error && <p className="mt-1 text-xs text-red-500">{error}</p>}
    </div>
  );
}

/* ================= FILE UPLOAD ================= */
function FileUpload({ file, onChange, onRemove, error }: any) {
  return (
    <div>
      <label className="mb-1 block text-xs font-medium text-gray-500">
        GST Certificate <span className="text-red-500">*</span>
      </label>

      {!file ? (
        <input
          type="file"
          onChange={(e) => onChange(e.target.files?.[0] || null)}
          className="block w-full text-sm"
        />
      ) : (
        <div className="flex items-center justify-between rounded-lg bg-gray-100 px-3 py-2 text-sm dark:bg-gray-800">
          <span className="truncate">{file.name}</span>
          <button onClick={onRemove} className="text-red-500 hover:underline">
            Remove
          </button>
        </div>
      )}

      {error && <p className="mt-1 text-xs text-red-500">{error}</p>}
    </div>
  );
}
