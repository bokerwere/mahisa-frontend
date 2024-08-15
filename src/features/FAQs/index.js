"use client"
import Accordion from "@/features/FAQs/Accordion";

const Questions = () => {
    return (
        <div className="bg-transparent flex flex-col items-center w-full" id="faqs">
            <div className="w-full md:w-1/2">
                <Accordion title="How can I join?">
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </p>
                </Accordion>
                <Accordion title="What are the requirements of joining?">
                    <p>
                        Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </p>
                </Accordion>
                <Accordion title="What is your  policy?">
                    <p>
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                        nisi ut aliquip ex ea commodo consequat.
                    </p>
                </Accordion>
                <Accordion title="What other info be added ?">
                    <p>
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                        nisi ut aliquip ex ea commodo consequat.
                    </p>
                </Accordion>
                <Accordion title="How does mahisaa sacco work work?">
                    <p>
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                        nisi ut aliquip ex ea commodo consequat.
                    </p>
                </Accordion>
                <Accordion title="How do I change my account email??">
                    <p>
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                        nisi ut aliquip ex ea commodo consequat.
                    </p>
                </Accordion>
            </div>
        </div>
    );
};

export default Questions;
