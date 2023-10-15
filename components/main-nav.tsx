import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import { Icons } from "./icons";
import { cn } from "@/lib/utils";
import { useRouter } from "next/router";
import Image from "next/image";
import { Variants, motion } from "framer-motion";
type Props = {};

const itemVariants: Variants = {
  open: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 300, damping: 24 },
  },
  closed: { opacity: 0, y: 20, transition: { duration: 0.2 } },
};

export default function MainNav({}: Props) {
  const menuRef = useRef(null);
  const router = useRouter();
  const { pathname } = router;
  const [toggle, setToggle] = useState<boolean>(false);
  const [screenWidth, setScreenWidth] = useState(0);

  useEffect(() => {
    setScreenWidth(window.innerWidth);
    function handleResize() {
      setScreenWidth(window.innerWidth);
    }

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    const handleComplete = () => {
      setToggle(false);
    };
    router.events.on("routeChangeStart", handleComplete);
    router.events.on("routeChangeComplete", handleComplete);
    router.events.on("routeChangeError", handleComplete);
  }, [router]);

  return (
    <motion.nav
      initial={false}
      className="bg-white border-gray-200 dark:bg-gray-900"
    >
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link href="/" className="flex items-center">
          <Image
            src="/images/logo.svg"
            className="h-8 mr-3"
            alt="E-Learning Demo"
            width={32}
            height={32}
          ></Image>
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
            ELEARN
          </span>
        </Link>
        <motion.a
          whileHover={{ scale: 1.2 }}
          onHoverStart={(e) => {}}
          onHoverEnd={(e) => {}}
        >
          <button
            data-collapse-toggle="navbar-default"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-default"
            aria-expanded="false"
            onClick={() => setToggle(!toggle)}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </motion.a>
        <motion.div
          animate={screenWidth > 768 || toggle ? "open" : "closed"}
          className={`${toggle ? "" : "hidden"} w-full md:block md:w-auto`}
          id="navbar-default"
        >
          <motion.ul
            ref={menuRef}
            className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700"
            variants={{
              open: {
                clipPath: "inset(0% 0% 0% 0% round 10px)",
                transition: {
                  type: "spring",
                  bounce: 0,
                  duration: 0.7,
                  delayChildren: 0.3,
                  staggerChildren: 0.05,
                },
              },
              closed: {
                clipPath: "inset(10% 50% 90% 50% round 10px)",
                transition: {
                  type: "spring",
                  bounce: 0,
                  duration: 0.3,
                },
              },
            }}
            // style={{ pointerEvents: toggle ? "auto" : "none" }}
          >
            <motion.li variants={itemVariants}>
              <Link
                href={"/"}
                className={`
                ${
                  pathname === "/"
                    ? "bg-primary md:bg-transparent text-white md:text-primary hover:text-gray-900"
                    : "text-gray-900"
                }
                block py-2 pl-3 pr-4  rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-gray-900 md:p-0 dark:text-white md:dark:hover:text-gray-900  dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent`}
              >
                Home
              </Link>
            </motion.li>
            <motion.li variants={itemVariants}>
              <Link
                href={"/courses"}
                className={`
                ${
                  pathname === "/courses"
                    ? "bg-primary md:bg-transparent text-white md:text-primary hover:text-gray-900"
                    : "text-gray-900"
                }
                block py-2 pl-3 pr-4  rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-gray-900 md:p-0 dark:text-white md:dark:hover:text-gray-900  dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent`}
              >
                Courses
              </Link>
            </motion.li>
          </motion.ul>
        </motion.div>
      </div>
    </motion.nav>
  );
}
