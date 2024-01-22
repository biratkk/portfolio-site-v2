import iconMappings from "../../../util/iconMappings";
import Link from "../atoms/Link";

type ContactMeFooterType = {};

const GithubIcon = iconMappings.GITHUB;
const FacebookIcon = iconMappings.FACEBOOK;
const LinkedinIcon = iconMappings.LINKEDIN;
const TwitterIcon = iconMappings.TWITTER;

const IconsShown = [GithubIcon, FacebookIcon, LinkedinIcon, TwitterIcon];

const ContactMeFooter = ({}: ContactMeFooterType) => {
  return (
    <footer className="lg:hidden w-screen h-40 bg-slate-700 dark:bg-transparent">
      <div className="flex flex-col items-center justify-center p-2 text-slate-200 h-full">
        <h4 className="text-lg">
          Contact me <Link href="mailto:koiralabirat@gmail.com">via email</Link>{" "}
          or through:
        </h4>
        <div className="flex p-4">
          {IconsShown.map((icon) => {
            return (
              <a
                rel="noopener noreferrer"
                target={"_blank"}
                href={icon.url}
                className="m-2 w-full h-full"
              >
                <icon.icon className="hover:text-green-500 w-full h-full" />
              </a>
            );
          })}
        </div>
      </div>
    </footer>
  );
};

export default ContactMeFooter;
