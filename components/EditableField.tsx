"use client";

import React, { useEffect, useState } from "react";

const EditableField = ({
  fieldKey,
  fieldValue,
  setFieldNewValue,
  type,
  isEditing,
  placeholder,
}) => {
  return (
    <div className="flex flex-col items-left justify-start">
      <label className="text-lg font-semibold capitalize">{fieldKey}:</label>
      <div className="flex flex-row gap-4 items-center justify-start ">
        <input
          value={fieldValue}
          disabled={!isEditing}
          onChange={(e) => setFieldNewValue(e.target.value)}
          type={type}
          className={` border-gray1 w-full h-10 w-100 rounded-xl  ${
            isEditing ? "bg-white shadow-lg" : "bg-neutral"
          } text-lg p-2`}
          placeholder={placeholder}
        />
      </div>
    </div>
  );
};

export default EditableField;
