import Header from "@/components/global/header";
import Footer from "@/components/global/footer";
import styles from "../page.module.css";

export default function Home() {
  return (
    <>
      <Header />
      <main className={styles.main}>
        {/*These boxes needs to be center of page each one 300x250px size with a margin of 15px and 20px padding.*/}
        <div className={styles.container}>
          <div className={styles.column}>
            <div className={styles.blogTop}><h1>A Tale of Two Todo Apps: Comparing Vanilla JavaScript vs. React/Next.js Development.</h1></div>
            <div className={styles.blogBottom}><p>Introduction:<br />
In the ever-evolving landscape of web development, the choice of tools and frameworks can significantly impact the development process and the resulting product. Today, we delve into the experiences of developing two Todo apps, one using vanilla JavaScript and the other utilizing React/Next.js. We'll explore the nuances of each approach, comparing structure, code organization, reusability, learning curve, and UI/UX aspects.

<br /><br />Structure, Syntax, and Code Organization:<br />
The vanilla JavaScript Todo app relied heavily on DOM manipulation, requiring meticulous attention to event handling and state management. In contrast, the React/Next.js app leveraged a component-based architecture, with JSX syntax offering a more intuitive way to define UI elements. The organization of code in the React/Next.js app felt more structured and modular, with components neatly encapsulating functionality.

<br /><br />Reusability and Maintainability:<br />
One of the standout advantages of the React/Next.js app was the reusability of components. Common UI elements like buttons and input fields were abstracted into reusable components, promoting DRY (Don't Repeat Yourself) principles and enhancing maintainability. In contrast, the vanilla JavaScript app lacked such modularity, leading to code duplication and increased complexity in managing updates and changes.

<br /><br />Learning Curve and Ease of Development:<br />
While both approaches had their learning curves, the React/Next.js ecosystem provided more comprehensive documentation and a vibrant community, easing the onboarding process. The component-based nature of React also facilitated rapid development, allowing for faster iteration and prototyping compared to the procedural nature of vanilla JavaScript.

<br /><br />UI/UX Aspects:<br />
In terms of UI/UX, the React/Next.js app excelled with its responsiveness and sleek styling. Leveraging CSS frameworks and libraries like Tailwind CSS or Material-UI streamlined the styling process, resulting in a polished user interface. Additionally, the interactive nature of React components enhanced user interaction, providing a smoother and more engaging experience compared to the static nature of the vanilla JavaScript app.

<br /><br />Conclusion:<br />
In conclusion, the choice between vanilla JavaScript and React/Next.js for developing a Todo app boils down to factors such as project complexity, team familiarity, and scalability requirements. While the vanilla JavaScript approach offers simplicity and accessibility, React/Next.js shines in terms of modularity, reusability, and developer productivity. Ultimately, both approaches have their merits, and the decision should be made based on the specific needs and constraints of the project.

<br /><br />GitHub Repositories:<br /><br />

Vanilla JavaScript Todo App: <a href="https://github.com/mcrow44/vanilla-todo" target="_blank" className={styles.blogLink}>Vanilla</a><br />
React/Next.js Todo App: <a href="https://github.com/mcrow44/react-todo" target="_blank" className={styles.blogLink}>React</a><br /><br />
In the end, the most important aspect is delivering a functional and user-friendly Todo app that meets the needs of its users, regardless of the underlying technology stack chosen.</p></div>
          </div>
        </div>
      </main>
      <Footer/>
    </>
  );
}