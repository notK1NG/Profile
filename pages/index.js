import Socials from "../components/Socials";
import Info from "../components/Info";
export default function Home() {
  return (
    <div className="bg-gray-900 h-screen flex items-center justify-center">
      <div className="bg-gray-700 w-80 rounded-3xl">
        <div className="mx-6 my-6">
          <Info />
        </div>
        <div className="mx-6 my-6">
          <Socials link="https://github.com/notK1NG" name="GitHub" />
          <Socials link="https://twitter.com/RandomU47252773" name="Twitter" />
          <Socials
            link="https://www.linkedin.com/in/sai-pranith-guddanti-b233a4273/"
            name="LinkedIn"
          />
          <Socials
            link="https://www.reddit.com/user/Early_Poem_7068"
            name="Reddit"
          />
        </div>
      </div>
    </div>
  );
}
