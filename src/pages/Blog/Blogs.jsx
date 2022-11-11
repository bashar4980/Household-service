import React from "react";
import {Helmet} from 'react-helmet'

const Blogs = () => {
  return (
    <>
     <Helmet>
    <meta charSet="utf-8" />
    <title>blogs</title>
   
</Helmet>
        <h3 className="text-3xl text-center pt-5">Blog Contents</h3>
        <div className="container w-11/12 py-10 mx-auto grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-4">
      <div className="mx-auto p-6 overflow-hidden rounded-lg shadow bg-gray-900 text-gray-100">
        <article>
          <h2 className="text-xl font-bold">
            Difference between SQL and NoSQL?
          </h2>
          <p className="mt-4 text-gray-400">
            SQL is RELATIONAL DATABASE MANAGEMENT SYSTEM (RDBMS) &
            NoSQL is Non-relational or distributed database system.
            SQL databases are efficient at processing queries and joining data across tables, making it easier to perform complex queries against structured data, including ad hoc requests. NoSQL databases lack consistency across products and typically require more work to query data, particular as query complexity increases.Examples: MySQL, PostgreSQL, Oracle, MS-SQL Server etc.Examples: MongoDB, GraphQL, HBase, Neo4j, Cassandra etc</p>
       
        </article>
      </div>
      <div className=" p-6 overflow-hidden rounded-lg shadow bg-gray-900 text-gray-100">
        <article>
          <h2 className="text-xl font-bold">
          What is JWT, and how does it work?
          </h2>
          <p className="mt-4 text-gray-400">
          JWT, or JSON Web Token, is an open standard used to share security information between two parties — a client and a server. Each JWT contains encoded JSON objects, including a set of claims. JWTs are signed using a cryptographic algorithm to ensure that the claims cannot be altered after the token is issued.
            </p>
       
        </article>
      </div>
      <div className=" p-6 overflow-hidden rounded-lg shadow bg-gray-900 text-gray-100">
        <article>
          <h2 className="text-xl font-bold">
          What is the difference between javascript and NodeJS?
          </h2>
          <p className="mt-4 text-gray-400">
          Javascript is a programming language that is used for writing scripts on the website.
          NodeJS is a Javascript runtime environment.Javascript can only be run in the browsers.
          We can run Javascript outside the browser with the help of NodeJS.It is basically used on the client-side.It is mostly used on the server-side.
            </p>
       
        </article>
      </div>
      <div className=" p-6 overflow-hidden rounded-lg shadow bg-gray-900 text-gray-100">
        <article>
          <h2 className="text-xl font-bold">
          How does NodeJS handle multiple requests at the same time?
          </h2>
          <p className="mt-4 text-gray-400">
          NodeJS receives multiple client requests and places them into EventQueue. NodeJS is built with the concept of event-driven architecture. NodeJS has its own EventLoop which is an infinite loop that receives requests and processes them
            </p>
       
        </article>
      </div>
    </div>
    </>
  );
};

export default Blogs;
