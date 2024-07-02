import { EventCardProps } from "@/Types";
import { FC } from "react";

const EventCard: FC<EventCardProps> = ({
  title,
  date,
  venue,
  time,
  dresscode,
  url,
}) => {
  return (
    <div className="w-full flex flex-col gap-2 my-6">
      <h2 className="content poppins-medium-italic underline">
        Celebrating Herbert Wigwe - " A Professional Legacy"
      </h2>
      <p className="content">Monday, March 4, 2024</p>
      <p className="content-small">Venue: Eko Hotel, Victoria Island, Lagos</p>
      <p className="content-small">Time: 2:00pm-6:00pm</p>
      <p className="content-small">Dress Code: Any</p>
      <p className="content-small underline hover:no-underline">
        URL:{" "}
        <a href="https://youtube.com/watch?v=t3YxP66XQPoMonday">
          https://youtube.com/watch?v=t3YxP66XQPoMonday
        </a>
      </p>
    </div>
  );
};

const About = () => {
  return (
    <div className="w-full p-8">
      {/* QUOTE SECTION */}
      <div className="w-full flex items-start">
        <img src="" alt="" className="bg-accent min-w-20 h-20 " />
        <div className="">
          <p className="text-primary text-[32px] pacifico-regular px-10">
            Dear Lord, may the memories of Herbert, Chizoba and Chizi be with us
            forever. Teach us to number our days, that we may apply our hearts
            to Wisdom. Psalms 90:12.
          </p>
        </div>
      </div>

      <div className="w-full pl-4 py-10">
        <ul className="w-full list-disc">
          <li>
            <p className="text-[18px] font-[500]">57 years old</p>
          </li>
          <li>
            <p className="text-[18px] font-[500]">
              Born on August 15, 1966 in Lagos, Nigeria
            </p>
          </li>
          <li>
            <p className="text-[18px] font-[500]">
              Passed away on February 9, 2024 in Halloran Springs, California,
              United States
            </p>
          </li>
        </ul>
      </div>

      <div className="">
        <p className="text-base leading-relaxed font-normal">
          This memorial website was created in memory of our dearly and deeply
          loved son, admired brother, devoted husband and loving father,{" "}
          <span className="font-medium">
            Dr Herbert "Gege" Onyewumbu Wigwe, C.F.R.,
          </span>{" "}
          57 years old, who was born on August 15, 1966, and was taken away from
          us, on Friday, February 9, 2024, alongside his dear wife, Chizoba and
          loved son, Chizi. <br />
          <br />
          The Onyewumbu of Pa Shyngle and Ma Stella Wigwe. <br />
          <br />
          Beloved husband of Chizoba Doreen Wigwe, (Nee Nwuba) (deceased),
          56yrs, July 12, 1967 - Feb 9, 2024. <br />
          <br />
          Cherished brother “Gege” to Iheanyi, Osita (deceased), Elizabeth
          Ikpeme, Joyce, Emeka, Peggy and Stella. <br />
          <br />
          Adored father of Chizi (deceased), Tochi, David, Hannah and Okachi.{" "}
          <br />
          <br />
          Our memories of Herbert, Chizoba and Chizi...will live on. <br />
          <br />
          We are eternally grateful to God for all the memories we shared as a
          family. <br />
          <br />
          They have indeed transitioned... <br />
          <br />
          ...To those who knew Herbert, it is a Great Loss
          <br />
          <span className="ml-10" /> To those who did NOT know Herbert, it is a
          Greater Loss
          <br />
          <span className="ml-20" /> To those that KNOW God, Herbert is
          definitely Heaven's Gain...
          <br />
        </p>
        <p className="author">(-Shola Oshinaike)</p>
      </div>

      <div className="mt-20 mb-8">
        <p className="content">In Loving Memory </p>
        <p className="text-base leading-relaxed font-normal">
          It is with deep sadness but gratitude to the Almighty God that we
          announce the untimely passing of our beloved family scion, Herbert
          Onyewumbu Wigwe, along with his devoted wife, Chizoba and cherished
          first son Chizi. Their lives were cut short in a heartbreaking
          accident that has left our family, Isiokpo, Rivers State, Nigeria,
          Africa and indeed the whole world, in profound grief and disbelief.{" "}
          <br />
          <br />
          Herbert was a pillar of strength in our family, always guiding us with
          his kindness, generosity, and unwavering love. His wife Chizoba was a
          wonderful wife and mother who dedicated her life to supporting her
          husband, while their son Chizi, brought laughter and light to all who
          knew him. <br /> <br />
          Their absence leaves a void that can never be filled, but their
          memories will continue to inspire and guide us through these difficult
          times. As believers in Jesus Christ, we have the assurance that death
          is not the end, but rather a transition to eternal life with God.{" "}
          <br />
          May their souls rest in eternal peace, reunited in a place where there
          is no pain or suffering.
        </p>
        <br />
        <br />

        <p className="content font-semibold">Burial Arrangements:</p>
        <p className="content">
          It would be our pleasure if you could join the Shyngle Wigwe Family in
          bidding "Good night" to our beloved "Gege", Chizoba and Chizi on the
          following days:
        </p>
      </div>

      {[1, 2, 3, 4, 5, 6, 7, 7, 8].map(() => (
        <EventCard />
      ))}

      <div>
        <p className="content-small my-6">
          “From our hearts to your soul <br />
          We write these words for you,
          <br />
          ’ Cause you’ve touched millions <br />
          In so many ways,
          <br />
          Than our words could ever express <br />
          We thank the Lord for bringing you our way <br />
          So hard to have to let you go <br />
          This loving is for life
          <br />
          This loving is for life
          <br />
          <br />
          When challenges came,
          <br />
          You were so fearless,
          <br />
          It’s Herbert, Chizoba and Chizi
          <br />
          Till Jesus Comes,
          <br />
          O how sad,
          <br />
          Sad indeed it is,
          <br />
          You’ve all left us
          <br />
          When we least expected.
          <br />
          <br />
          What more could we have asked for,
          <br />
          You were more than we ever prayed for <br />
          Fearless, Faithful, Always Smiling,
          <br />
          Banking - world Changer,
          <br />
          Mother and Son
          <br />
          You meant everything to us
          <br />
          This loving is for life
          <br />
          We’re loving you for life.
          <br />
        </p>
        <p className="content-small author">
          (- For Life by Moses Bliss, as paraphrased by Shola Osinaike)
        </p>

        <p className="content-small mt-6">With Love and Remembrance</p>
        <p className="content-small poppins-semibold-italic">Emeka Shyngle Wigwe <br /> For the family.</p>
      </div>

      <div className="">

      </div>
    </div>
  );
};

export default About;