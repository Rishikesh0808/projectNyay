import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import styles from "./case_status.module.css";

const CaseStatus = () => {
    const { caseNumber } = useParams();
    const [caseDetails, setCaseDetails] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchCaseDetails = async () => {
            try {
                const response = await axios.get("http://localhost:3005/tracks", {
                    params: { caseNumber },
                    headers: { Authorization: `Bearer ${localStorage.getItem("jwt")}` },
                });
                setCaseDetails(response.data);
            } catch (err) {
                setError("Failed to fetch case details. Please try again.");
                console.error("Error fetching case details:", err);
            }
        };

        if (caseNumber) fetchCaseDetails();
    }, [caseNumber]);

    return (
        <div className={styles.container}>
            <h1 className={styles.heading}>Case Status</h1>
            {error && <p className={styles.error}>{error}</p>}
            {caseDetails ? (
                <div className={styles["table-container"]}>
                    <table className={styles.table}>
                        <thead>
                            <tr>
                                <th className={styles.th}>Case Number</th>
                                <th className={styles.th}>Case Status</th>
                                <th className={styles.th}>First Hearing</th>
                                <th className={styles.th}>Recent Hearing</th>
                                <th className={styles.th}>Petitioner Name</th>
                                <th className={styles.th}>Petitioner Advocate</th>
                                <th className={styles.th}>Respondent Name</th>
                                <th className={styles.th}>Respondent Advocate</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className={styles.td}>{caseDetails.case_Number}</td>
                                <td className={styles.td}>{caseDetails.case_status}</td>
                                <td className={styles.td}>{caseDetails.first_hearing}</td>
                                <td className={styles.td}>{caseDetails.recent_hearing}</td>
                                <td className={styles.td}>{caseDetails.petitioner_name}</td>
                                <td className={styles.td}>{caseDetails.petitioner_advocate}</td>
                                <td className={styles.td}>{caseDetails.respondent_name}</td>
                                <td className={styles.td}>{caseDetails.respondent_advocate}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            ) : (
                <p className={styles.loading}>Loading case details...</p>
            )}
        </div>
    );
};

export default CaseStatus;
