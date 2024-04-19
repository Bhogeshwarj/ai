import { Models } from "@/components/models";


export default function Layout({ children }: { children: React.ReactNode }) {
    return (
      <div >
        <div>
            <Models />
        </div>
        <div >{children}</div>
      </div>
    );
  }
