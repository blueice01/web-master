import Image from "next/image";
import { Layout } from "@/components/component/layout";

import Link from "next/link"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
    <header className="px-4 lg:px-6 h-14 flex items-center bg-gray-900 text-gray-50 shadow">
      <Link className="flex items-center justify-center" href="#">
        <MountainIcon className="h-6 w-6" />
        <span className="sr-only">Portfolio</span>
      </Link>
      <nav className="ml-auto flex gap-4 sm:gap-6">
        <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
          About
        </Link>
        <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
          Projects
        </Link>
        <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
          Contact
        </Link>
      </nav>
    </header>
    <main className="flex-1">
    <section className="relative w-full pt-12 md:pt-24 lg:pt-32 lg:pb-32 bg-black text-gray-50 flex justify-center">
  <div className="absolute inset-0 w-full h-full flex justify-start">
    <video autoPlay loop muted playsInline className="object-cover">
      <source src="/img/4439-178898286.mp4" type="video/mp4" />
    </video>
  </div>
  <div className="container relative px-4 md:px-6 space-y-10 xl:space-y-16">
    <div className="grid max-w-[1300px] mx-auto gap-4 px-4 sm:px-6 md:px-10 md:grid-cols-2 md:gap-16 items-center">
      <div className="flex flex-col justify-center items-center text-center">
          <h1 className="lg:leading-tighter text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl xl:text-[3.4rem] 2xl:text-[3.75rem]">
            3D Art
          </h1>
          <h2 className="text-xl font-medium text-100">김동우</h2>
          <p className="mt-4 max-w-[700px] text-gray-300 md:text-xl">
            3d 포토폴리오
          </p>
        </div>
            <img
  alt="Hero"
  className="mx-auto aspect-[5/3] overflow-hidden rounded-xl object-cover object-center"
  height="300"
  src="/img/rander.jpg"
  width="1200"
/>
          </div>
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32 lg:pb-32 bg-gradient-to-b flex justify-center" id="about">
  <div className="container grid items-center justify-center gap-4 px-4 md:px-6 lg:grid-cols-2 lg:gap-10">
    <div className="space-y-2">
    <h2 className="text-3xl font-bold tracking-tighter text-white md:text-4xl md:tracking-tight">대표 작업물</h2>
            <p className="max-w-[600px] text-gray-300 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-800">
            배경 모델링 작업중 - 더미
            </p>
          </div>
          <img
            alt="About"
            className="mx-auto aspect-square overflow-hidden rounded-xl object-cover object-center"
            height="720"
            src="/img/rander02.jpg"
            width="1280"
          />
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32 lg:pb-32 flex justify-center" id="projects" style={{ background: "linear-gradient(#303C4C, #1D232C)" }}>
  <div className="container px-4 md:px-6">
  <div className="flex flex-col items-center justify-center space-y-4 text-center">
  <div className="space-y-2">
    <h2 className="text-3xl font-bold tracking-tighter text-white md:text-4xl md:tracking-tight">3D 작업물</h2>
    <p className="max-w-[900px] text-gray-300 mb-2.5 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
      프랍, 캐릭터, 애니메이션
    </p>
  </div>
</div>
<div className="mx-auto grid grid-cols-1 gap-6 sm:grid-cols-2 lg:max-w-5xl mt-2.5">
  <Link className="group relative overflow-hidden rounded-xl bg-gray-100 transition-all hover:scale-[1.02] dark:bg-gray-800 mt-2.5" href="#">
    <img alt="Project" className="aspect-video w-full object-cover object-center transition-all group-hover:scale-110" height="310" src="/img/pp.jpg" width="550" />
    <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent p-4 transition-all group-hover:bg-gray-900/60">
      <h3 className="text-lg font-bold text-gray-50">프랍</h3>
      <p className="mt-1 text-sm text-gray-400">환풍기</p>
    </div>
  </Link>

  <Link className="group relative overflow-hidden rounded-xl bg-gray-100 transition-all hover:scale-[1.02] dark:bg-gray-800 mt-2.5" href="#">
    <img alt="Project" className="aspect-video w-full object-cover object-center transition-all group-hover:scale-110" height="310" src="/img/x.jpg" width="550" />
    <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent p-4 transition-all group-hover:bg-gray-900/60">
      <h3 className="text-lg font-bold text-gray-50">프랍</h3>
      <p className="mt-1 text-sm text-gray-400">쓰레기봉투</p>
    </div>
  </Link>

      <Link className="group relative overflow-hidden rounded-xl bg-gray-100 transition-all hover:scale-[1.02] dark:bg-gray-800" href="#">
        <img alt="Project" className="aspect-video w-full object-cover object-center transition-all group-hover:scale-110" height="310" src="/img/snow.jpg" width="550" />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent p-4 transition-all group-hover:bg-gray-900/60">
          <h3 className="text-lg font-bold text-gray-50">캐릭터</h3>
          <p className="mt-1 text-sm text-gray-400">스노우 맨</p>
        </div>
      </Link>

      <Link className="group relative overflow-hidden rounded-xl bg-gray-100 transition-all hover:scale-[1.02] dark:bg-gray-800" href="#">
        <img alt="Project" className="aspect-video w-full object-cover object-center transition-all group-hover:scale-110" height="310" src="/img/buri.jpg" width="550" />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent p-4 transition-all group-hover:bg-gray-900/60">
          <h3 className="text-lg font-bold text-gray-50">캐릭터</h3>
          <p className="mt-1 text-sm text-gray-400">부리부리몬</p>
        </div>
      </Link>

      <Link className="group relative overflow-hidden rounded-xl bg-gray-100 transition-all hover:scale-[1.02] dark:bg-gray-800" href="#">
        <img alt="Project" className="aspect-video w-full object-cover object-center transition-all group-hover:scale-110" height="310" src="/img/forg.jpg" width="550" />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent p-4 transition-all group-hover:bg-gray-900/60">
          <h3 className="text-lg font-bold text-gray-50">캐릭터</h3>
          <p className="mt-1 text-sm text-gray-400">개구리 캐릭터</p>
        </div>
      </Link>

      <Link className="group relative overflow-hidden rounded-xl bg-gray-100 transition-all hover:scale-[1.02] dark:bg-gray-800" href="#">
        <img alt="Project" className="aspect-video w-full object-cover object-center transition-all group-hover:scale-110" height="310" src="/img/ani.gif.gif" width="550" />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent p-4 transition-all group-hover:bg-gray-900/60">
          <h3 className="text-lg font-bold text-gray-50">애니메이션</h3>
          <p className="mt-1 text-sm text-gray-400">검 공격 모션</p>
        </div>
      </Link>
    </div>
  </div>
</section>
<section className="w-full py-12 md:py-24 lg:py-32 lg:pb-32 bg-gray-100 dark:bg-gray-800 flex justify-center" id="contact" style={{ background: "linear-gradient(#1D232C, #000000)" }}>
  <div className="container grid items-center justify-center gap-4 px-4 md:px-6">
    <div className="space-y-3">
    <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight text-white"> 연락처</h2>
            <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
            연락 불가
            </p>
          </div>
          <div className="mx-auto w-full max-w-sm space-y-2">
            <form className="flex flex-col space-y-2">
              <Input className="max-w-lg flex-1" placeholder="Name" type="이름" />
              <Input className="max-w-lg flex-1" placeholder="Email" type="이메일" />
              <Textarea className="max-w-lg flex-1" placeholder="메시지" />
              <Button type="submit">메시지 보내기</Button>
            </form>
          </div>
        </div>
      </section>
    </main>
    <footer className="bg-gray-900 text-gray-50 p-6 md:py-12 w-full">
  <div className="container max-w-7xl mx-auto text-center grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 text-sm">
    <div className="grid gap-1">
      <h3 className="font-semibold">About</h3>
      <Link href="#">About Me</Link>
      <Link href="#">My Projects</Link>
    </div>
    <div className="grid gap-1">
      <h3 className="font-semibold">Services</h3>
      <Link href="#">Web Development</Link>
      <Link href="#">Mobile Development</Link>
      <Link href="#">Desktop Development</Link>
    </div>
    <div className="grid gap-1">
      <h3 className="font-semibold">Contact</h3>
      <Link href="#">Get in Touch</Link>
      <Link href="#">Email</Link>
      <Link href="#">LinkedIn</Link>
    </div>
    <div className="grid gap-1">
      <h3 className="font-semibold">Legal</h3>
      <Link href="#">Privacy Policy</Link>
      <Link href="#">Terms of Service</Link>
    </div>
    <div className="grid gap-1">
      <h3 className="font-semibold">Social</h3>
      <Link href="#">Twitter</Link>
      <Link href="#">GitHub</Link>
      <Link href="#">Instagram</Link>
    </div>
  </div>
</footer>
  </div>
  );
}

  function MountainIcon(props) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
      </svg>
    )
  }
