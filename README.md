# Property and Beyond Website

This repository contains the source code for the "Property and Beyond" website, a project developed using Next.js, with content managed via Sanity CMS, styled with Tailwind CSS, and deployed on Vercel.

**Live site**: [darkmatterlabs.property](https://www.darkmatterlabs.property/)

## Project Overview

The "Property and Beyond" website is designed to provide insights, research, and resources related to property systems and urban development. The site is built using modern web technologies such as Next.js, Sanity CMS for content management, Tailwind CSS for styling, and deployed on Vercel for seamless hosting and deployment.

## Tech Stack

- **Next.js**: A React-based framework for building fast, server-rendered web applications.
- **Sanity CMS**: A headless CMS used for managing content. It integrates seamlessly with Next.js to allow for dynamic, easily updated content.
- **Tailwind CSS**: A utility-first CSS framework that allows for custom designs directly within the component structure.
- **Vercel**: The site is deployed and hosted on Vercel, providing fast, scalable, and automatic deployments.

## Deployment

This project is deployed automatically via Vercel. Each push to the `main` branch triggers a new deployment. Vercel handles the build process and provides a fast CDN for serving the site.

**Vercel Deployment URL**: [https://www.darkmatterlabs.property/](https://www.darkmatterlabs.property/)

To make updates:

1. Push changes to the `main` branch.
2. Vercel automatically builds and deploys the latest version of the site.

## Local Development

To run the project locally, follow these steps:

1. Clone the repository:

    ```bash
    git clone https://github.com/Dark-Matter-Labs/property-and-beyond.git
    cd property-and-beyond
    ```

2. Install dependencies:

    ```bash
    yarn
    ```

3. Set up environment variables:

   Create a `.env.local` file in the root of the project with the following variables:

    ```bash
    NEXT_PUBLIC_SANITY_PROJECT_ID=<your_sanity_project_id>
    NEXT_PUBLIC_SANITY_DATASET=<your_sanity_dataset>
    SANITY_API_TOKEN=<your_sanity_api_token>
    ```

4. Run the development server:

    ```bash
    yarn dev
    ```

    The app will be running at `http://localhost:3000`.

5. To access the Sanity CMS Studio:

    Navigate to `http://localhost:3000/studio/` or run the studio locally (if configured) via:

    ```bash
    sanity start
    ```

## How to Update Content

The website uses Sanity CMS to manage content. To update content, you can log into the Sanity Studio, make changes to the content, and those changes will automatically reflect on the website.

- **Sanity Studio URL**: `https://www.darkmatterlabs.property/studio`

To add or modify content:

1. Navigate to the relevant content section in the CMS.
2. Make your changes or add new entries.
3. Save and publish the changes.

Once published, the updated content will appear on the live site without needing a redeploy.

## Styling

The site is styled using Tailwind CSS. If you need to adjust the design or add new styles:

1. Update the classes directly in your JSX components using Tailwind's utility classes.
2. Custom CSS rules can be added in the `tailwind.config.js` file if necessary.

For more information on Tailwind CSS, visit [https://tailwindcss.com](https://tailwindcss.com).

## Contributing

We welcome contributions! If you'd like to contribute to this project, please follow these steps:

1. Fork the repository.
2. Create a new branch for your feature or fix.
3. Make your changes and test them locally.
4. Open a pull request with a detailed description of your changes.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.

## Contact

For any questions or support regarding this project, feel free to reach out via the repository's issue tracker or through the website's contact page.
