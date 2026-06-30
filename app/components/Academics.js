"use client";
import {useState, useEffect, useRef} from "react";
import {HiOutlineDownload} from "react-icons/hi";
import {FaUinversity} from "react-icons/fa";
import styles from "./Academics.module.css";

const modules=[
  { name: "Data Structures and Algorithms 1", grade: "Merit" },
  { name: "Database Fundamentals", grade: "Distinction" },
  { name: "Database Programming", grade: "Distinction" },
  { name: "Data Structures and Algorithms 2", grade: "Distinction" },
  { name: "Web Application Development", grade: "Distinction" },
  { name: "Compiler Techniques", grade: "Distinction" },
  { name: "Mobile Application Development", grade: "Distinction" },
  { name: "Software Design", grade: "Distinction" },
  { name: "Distributed Systems and Applications", grade: "Distinction" }
];

function gradeClass(grade){
    if(grade==="Distinction") return styles.distinction;
    if(grade==="Merit") return styles.merit;
    return styles.pass;
}

export default function Academics(){}
