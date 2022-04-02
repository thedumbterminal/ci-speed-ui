import TopNav from './TopNav'
import * as React from "react";

export interface LayoutProps  { 
   children: React.ReactNode
}

export default function Layout(props: LayoutProps) {
  return (
    <>
      <TopNav />
      <main>{props.children}</main>
    </>
  )
}