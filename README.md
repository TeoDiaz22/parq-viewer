# ParQ Viewer

ParQ Viewer is an application that allows to display the information read from an **RFID-RC522** module connected to an **Arduino UNO**, which represents the reading of personal cards in a parking lot. Additionally through the readings of an infrared sensor **KY-010** is detected if the parking lot is available or not. All this information reaches the web through web socket communication issued by a **NodeMCU ESP8266**, which acts as server and client.


## Prerequisites

- Node.js version: `22.3.0`
- npm, Yarn, or pnpm installed

## Getting Started

### Installation

You can install the project dependencies using npm, Yarn, or pnpm.

#### Using npm

```bash
npm install
```

#### Using Yarn

```bash
yarn install
```

#### Using pnpm

```bash
pnpm install
```

### Running the Development Server

To start the development server, run the following command:

```bash
npm run dev
```

Alternatively, if you are using Yarn or pnpm:

```bash
yarn dev
```

```bash
pnpm dev
```

### Building the Project

To build the project for production, use the following command:

```bash
npm run build
```

Alternatively, if you are using Yarn or pnpm:

```bash
yarn build
```

```bash
pnpm build
```

### Running the Production Build

To preview the production build locally, you can use the following command:

```bash
npm run preview
```

Alternatively, if you are using Yarn or pnpm:

```bash
yarn preview
```

```bash
pnpm preview
```

## Additional Information

- This project uses Vite as the build tool and React for the frontend framework.
- Make sure your Node.js version matches the specified version (22.3.0) to avoid any compatibility issues.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

For any questions or issues, please contact the development team.

---