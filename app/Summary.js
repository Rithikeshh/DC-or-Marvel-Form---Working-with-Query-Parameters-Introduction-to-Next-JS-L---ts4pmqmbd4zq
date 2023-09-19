'use client'
import { useState } from "react";
function Summary({ formData }) {
    return (
        <div id="summary">
            <h2>Summary</h2>
            <p>Form Type: {formData.type == 'A' ? "Form A":"Form B"}</p>
            <p>Age: {formData.age}</p>

            {formData.type == 'A' &&<p>DC Shows: {formData.show}</p>}

            {formData.type != 'A' &&<p>Marvel Shows: {formData.show}</p>}

        </div>
    );
}
export default Summary;