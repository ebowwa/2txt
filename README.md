# 2txt - Image to Text, Fast

## Introduction

2txt is a web application that allows users to quickly convert images to text using the Anthropic AI SDK. The application provides a simple and intuitive interface for uploading images, with features like drag and drop, paste, and file upload support. The extracted text is then displayed in a clean and organized manner, with the option to copy the text to the clipboard.

## Features

1. **Image Conversion**: The application uses the Anthropic AI SDK to generate text descriptions and extract text from uploaded images.
2. **Drag and Drop**: Users can drag and drop images directly onto the application to initiate the conversion process.
3. **Paste Support**: Users can paste images from the clipboard, and the application will automatically start the conversion process.
4. **File Upload**: Users can also click on the upload area to select a file from their local file system.
5. **Rate Limiting**: The application implements rate limiting using the Upstash Redis service to prevent abuse and ensure fair usage.
6. **Error Handling**: The application displays meaningful error messages to the user if there are any issues during the conversion process, such as unsupported image formats or file size limits.
7. **Responsive Design**: The application is designed to be responsive and accessible across various devices and screen sizes.
8. **Clipboard Integration**: Users can easily copy the generated text descriptions and extracted text to their clipboard.
9. **Analytics Integration**: The application integrates with Vercel Analytics to track user interactions and usage metrics.

## Technical Overview

The 2txt application is built using the following technologies:

1. **Next.js**: The application is built using the Next.js framework, which provides a robust and scalable platform for building server-rendered React applications.
2. **Anthropic AI SDK**: The application uses the Anthropic AI SDK to perform the image-to-text conversion process.
3. **Upstash Redis**: The application uses the Upstash Redis service to implement rate limiting for the API endpoints.
4. **Geist UI**: The application's user interface is styled using the Geist UI library, which provides a clean and modern design.
5. **Vercel Analytics**: The application integrates with Vercel Analytics to track user interactions and usage metrics.

The application's codebase is organized as follows:

- `app/api/completion/route.ts`: This file defines the API route for handling the image-to-text conversion process.
- `app/layout.tsx`: This file defines the overall layout and structure of the application, including the header, main content area, and footer.
- `app/page.tsx`: This file defines the main page component, which handles the user interface for image upload, conversion, and text display.
- `app/utils.ts`: This file contains a utility function for checking if an image type is supported.

The application's entry point is the `app/page.tsx` file, which renders the main page component. The page component handles the user interactions, such as image upload, drag and drop, and paste, and manages the state of the application, including the uploaded image and the generated text.

The `app/api/completion/route.ts` file defines the API route that handles the image-to-text conversion process. It receives the base64-encoded image data from the client, sends it to the Anthropic AI SDK, and streams the generated text back to the client.

The `app/layout.tsx` file defines the overall layout and structure of the application, including the header, main content area, and footer. It also integrates the Toaster component for displaying toast notifications and the Vercel Analytics component for tracking user interactions.

The `app/utils.ts` file contains a utility function `isSupportedImageType` that checks if a given image type is supported by the application.

## Getting Started

To run the 2txt application locally, follow these steps:

1. Clone the repository:

```
git clone https://github.com/ai-ng/2txt.git
cd 2txt
```

2. Install the dependencies:

```
npm install
```

3. Set the required environment variables:

```
ANTHROPIC_API_KEY=your_anthropic_api_key
KV_REST_API_URL=your_upstash_redis_url
KV_REST_API_TOKEN=your_upstash_redis_token
```

4. Start the development server:

```
npm run dev
```

The application should now be running at `http://localhost:3000`.

## Deployment

The 2txt application is designed to be deployed on Vercel. To deploy the application, follow these steps:

1. Fork the repository on GitHub.
2. Create a new Vercel project and link it to your forked repository.
3. Set the required environment variables in the Vercel project settings.
4. Deploy the project.

Alternatively, you can click the "Deploy" button in the project's README file, which will take you directly to the Vercel deployment interface with the necessary environment variables pre-populated.

## Contributing

If you'd like to contribute to the 2txt project, please follow these steps:

1. Fork the repository on GitHub.
2. Create a new branch for your feature or bug fix.
3. Make your changes and ensure that the application still works as expected.
4. Submit a pull request with a detailed description of your changes.

Your contributions are greatly appreciated!

## License

The 2txt project is licensed under the [MIT License](LICENSE).