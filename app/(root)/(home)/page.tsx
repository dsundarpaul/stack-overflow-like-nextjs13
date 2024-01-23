import QuestionsCard from "@/components/cards/QuestionsCard";
import HomeFilters from "@/components/home/HomeFilters";
import Filter from "@/components/shared/Filter";
import NoResult from "@/components/shared/NoResult";
import LocalSearchbar from "@/components/shared/search/LocalSearchbar";
import { Button } from "@/components/ui/button";
import { HomePageFilters } from "@/constants/filters";
import Link from "next/link";

const questions = [
  {
    _id: "1",
    title: "How to use TypeScript with React?",
    tags: [
      { _id: "101", name: "TypeScript" },
      { _id: "102", name: "React" },
    ],
    author: {
      _id: "201",
      name: "John Doe",
      picture: "john-doe.jpg",
    },
    upvotes: 1050,
    answers: [
      {
        answerId: "301",
        text: "You can use the tsx extension for React components.",
      },
      {
        answerId: "302",
        text: "Make sure to install @types/react for TypeScript support.",
      },
    ],
    views: 9900000,
    createdAt: new Date("2024-01-01"),
  },
  {
    _id: "2",
    title: "Best practices for Node.js development?",
    tags: [
      { _id: "103", name: "Node.js" },
      { _id: "104", name: "Best Practices" },
    ],
    author: {
      _id: "202",
      name: "Jane Smith",
      picture: "jane-smith.jpg",
    },
    upvotes: 10,
    answers: [
      {
        answerId: "303",
        text: "Always use asynchronous functions to avoid blocking the event loop.",
      },
      {
        answerId: "304",
        text: "Use npm scripts for common tasks like testing and linting.",
      },
    ],
    views: 99,
    createdAt: new Date("2022-02-15"),
  },
  {
    _id: "3",
    title: "How to deploy a React app to Netlify?",
    tags: [
      { _id: "105", name: "React" },
      { _id: "106", name: "Netlify" },
    ],
    author: {
      _id: "203",
      name: "Sam Wilson",
      picture: "sam-wilson.jpg",
    },
    upvotes: 8,
    answers: [
      {
        answerId: "305",
        text: "Configure your build settings in your Netlify project dashboard.",
      },
      {
        answerId: "306",
        text: "You can deploy directly from your GitHub repository.",
      },
    ],
    views: 99,
    createdAt: new Date("2022-03-10"),
  },
  {
    _id: "4",
    title: "What are the advantages of using Redux in a React application?",
    tags: [
      { _id: "107", name: "React" },
      { _id: "108", name: "Redux" },
    ],
    author: {
      _id: "204",
      name: "Alice Johnson",
      picture: "alice-johnson.jpg",
    },
    upvotes: 12,
    answers: [
      {
        answerId: "307",
        text: "Redux helps manage global state in a predictable way.",
      },
      {
        answerId: "308",
        text: "It enables easy debugging with the Redux DevTools extension.",
      },
    ],
    views: 99,
    createdAt: new Date("2022-04-05"),
  },
  {
    _id: "5",
    title: "How to implement authentication in a Node.js application?",
    tags: [
      { _id: "109", name: "Node.js" },
      { _id: "110", name: "Authentication" },
    ],
    author: {
      _id: "205",
      name: "Chris Miller",
      picture: "chris-miller.jpg",
    },
    upvotes: 18,
    answers: [
      {
        answerId: "309",
        text: "Consider using libraries like Passport.js for authentication middleware.",
      },
      {
        answerId: "310",
        text: "Store user information securely and use JWT tokens for session management.",
      },
    ],
    views: 99,
    createdAt: new Date("2022-05-20"),
  },
  {
    _id: "6",
    title: "Optimizing performance in a React application?",
    tags: [
      { _id: "111", name: "React" },
      { _id: "112", name: "Performance" },
    ],
    author: {
      _id: "206",
      name: "Eva Thompson",
      picture: "eva-thompson.jpg",
    },
    upvotes: 14,
    answers: [
      {
        answerId: "311",
        text: "Use React.memo() for memoizing components and preventing unnecessary renders.",
      },
      {
        answerId: "312",
        text: "Consider lazy loading and code splitting for optimizing bundle size.",
      },
    ],
    views: 99,
    createdAt: new Date("2022-06-15"),
  },
  {
    _id: "7",
    title: "How to handle state in functional components with React Hooks?",
    tags: [
      { _id: "113", name: "React" },
      { _id: "114", name: "Hooks" },
    ],
    author: {
      _id: "207",
      name: "Mike Carter",
      picture: "mike-carter.jpg",
    },
    upvotes: 11,
    answers: [
      {
        answerId: "313",
        text: "Use useState() for managing state variables in functional components.",
      },
      {
        answerId: "314",
        text: "Effect hooks like useEffect() can handle side effects and lifecycle events.",
      },
    ],
    views: 99,
    createdAt: new Date("2022-07-01"),
  },
];

export default function Home() {
  return (
    <>
      <div className="flex w-full flex-col-reverse justify-between gap-4 sm:flex-row sm:items-center">
        <h1 className="h1-bold text-dark100_light900">All Questions</h1>
        <Link href="/ask-question" className="flex justify-end max-sm:w-full">
          <Button className="primary-gradient min-h-[46px] px-4 py-3 !text-light-900">
            Ask Question
          </Button>
        </Link>
      </div>
      <div className="mt-11 flex  items-center justify-between gap-5 max-sm:flex-col">
        <LocalSearchbar
          route="/"
          iconPosition="left"
          imgSrc="/assets/icons/search.svg"
          placeholder="Serch for Questions..."
          otherClasses="flex-1"
        />

        <Filter
          filters={HomePageFilters}
          otherClasses="min-h-[56px] sm:min-w-[170px]"
          containerClasses="hidden max-md:flex"
        />
      </div>
      <HomeFilters />

      <div className="mt-10 flex w-full flex-col gap-6">
        {questions.length > 0 ? (
          questions.map((question) => (
            <QuestionsCard
              key={question._id}
              _id={question._id}
              title={question.title}
              tags={question.tags}
              author={question.author}
              upvotes={question.upvotes}
              answers={question.answers}
              views={question.views}
              createdAt={question.createdAt}
            />
          ))
        ) : (
          <NoResult
            title="There is no questions to show"
            description=" Be the first to break the silence! 🚀 Ask a Question and kickstart the
            discussion. our query could be the next big thing others learn from. Get
            involed 💡"
            link="/ask-question"
            linkTitle="Ask a Question"
          />
        )}
      </div>
    </>
  );
}
