// pages/page.tsx
import Image from "next/image";
import { Component } from "../components/Component";
import {Key} from "../components/key"
import {Users} from "../components/User"
import { Price } from "@/components/price";
import { Start } from "@/components/start";
import { About } from "@/components/about";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <>
      <Component />
       <Key/>
       <Users/>

       <Price/>

       <Start/>

       <About/>

       <Footer/>

    </>
  );
}
