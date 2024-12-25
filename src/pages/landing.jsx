import {Button} from "@/components/ui/button";
import {Input} from "@/components/ui/input";
import {useState} from "react";
import {useNavigate} from "react-router-dom";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const LandingPage = () => {
  const [longUrl, setLongUrl] = useState("");
  const navigate = useNavigate();

  const handleShorten = (e) => {
    e.preventDefault();
    if (longUrl) navigate(`/auth?createNew=${longUrl}`);
  };

  return (
    <div className="flex flex-col items-center">
      <h2 className="my-10 sm:my-16 text-3xl sm:text-6xl lg:text-7xl text-white text-center font-extrabold">
      Your go-to tool for shorter links!👇
      </h2>
      <form
        onSubmit={handleShorten}
        className="sm:h-14 flex flex-col sm:flex-row w-full md:w-2/4 gap-2"
      >
        <Input
          type="url"
          placeholder="Got a super long URL? Drop it here!"
          value={longUrl}
          onChange={(e) => setLongUrl(e.target.value)}
          className="h-full flex-1 py-4 px-4"
        />
        <Button type="submit" className="h-full" variant="destructive">
          Shorten!
        </Button>
      </form>
      {/* <img
        src="/banner1.jpg" // replace with 2 in small screens
        className="w-full my-11 md:px-11"
      /> */}
      <div className="h-12 p-12 ">
      <h1 className="text-4xl font-bold underline">Frequently Asked Questions</h1>
      </div>
      <Accordion type="multiple" collapsible className="w-full md:px-11 p-8">
        <AccordionItem value="item-1 ">
          <AccordionTrigger className="text-2xl">
            How does the Shrnk URL shortener works?
          </AccordionTrigger>
          <AccordionContent className="text-lg">
            When you enter a long URL, our system generates a shorter version of
            that URL. This shortened URL redirects to the original long URL when
            accessed.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger className="text-2xl">
          Is it free to use?
          </AccordionTrigger>
          <AccordionContent className="text-lg">
          Yes, Shrnk URL shortener is completely free to use for shortening links.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger className="text-2xl">
            What analytics are available for my shortened URLs?
          </AccordionTrigger>
          <AccordionContent className="text-lg">
            You can view the number of clicks, geolocation data of the clicks
            and device types (mobile/desktop) for each of your shortened URLs.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-4">
          <AccordionTrigger className="text-2xl">
          Are my shortened URLs permanent?
          </AccordionTrigger>
          <AccordionContent className="text-lg">
          Yes, your shortened URLs remain active indefinitely unless deleted by you or due to violations of our terms of service.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-5">
          <AccordionTrigger className="text-2xl">
          What types of URLs can I shorten?
          </AccordionTrigger>
          <AccordionContent className="text-lg">
          You can shorten any valid web address, including those leading to websites, videos, images, or other online resources.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-6">
          <AccordionTrigger className="text-2xl">
          Can I customize my short URL?
          </AccordionTrigger>
          <AccordionContent className="text-lg">
          Yes, you can customize the ending of your shortened URL to make it more meaningful and easy to remember.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-7">
          <AccordionTrigger className="text-2xl">
          How long do the shortened links last?
          </AccordionTrigger>
          <AccordionContent className="text-lg">
          Shortened links created with Shrnk last indefinitely. However, we may remove inactive links after a significant period to maintain optimal service.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default LandingPage;