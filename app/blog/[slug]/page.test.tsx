/**
 * @jest-environment jsdom
 */
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Page from "./page";

it("App Router: Works with dynamic route segments", async () => {
  const page = await Page({
    params: Promise.resolve({
      slug: "Test",
    }),
  });

  render(page);

  expect(screen.getByRole("heading")).toHaveTextContent("Slug: Test");
});

it("Nguyen Truong Quang in the document", async () => {
  const page = await Page({
    params: Promise.resolve({
      slug: "Test",
    }),
  });

  render(page);

  expect(screen.getByText("Nguyen Truong Quang")).toBeInTheDocument();
});
