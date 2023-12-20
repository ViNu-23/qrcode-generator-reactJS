import React, { useState } from "react";
import { createRoot } from 'react-dom/client';
import {
  Card,
  CardHeader,
  CardFooter,
  Heading,
  Button,
  Input,
  Container,
  ChakraProvider,
  Center,
} from "@chakra-ui/react";
import QRCode from "qrcode";

function Main() {
  const [urlInput, setUrlInput] = useState("");

  function getQrCode() {
    // Create a canvas element to render the QR code
    const canvas = document.createElement("canvas");

    // Generate QR code based on the input URL
    QRCode.toCanvas(canvas, urlInput, { errorCorrectionLevel: "H" }, function (
      error
    ) {
      if (error) console.error(error);

      // Display the QR code
      createRoot(document.getElementById("qr-code-container")).render(
        <img src={canvas.toDataURL()} alt="QR Code" />
      );
    });
  }

  return (
    <>
      <div className="container">
        <ChakraProvider>
          <Center h="100vh">
            <Card align="center" boxShadow="2xl" bg="white" m={10} p={10}>
              <CardHeader>
                <Heading color="#2B6CB0">QR Code Generator</Heading>
              </CardHeader>
              <Container>
                <Input
                  variant="outline"
                  placeholder="https://example.com"
                  mt={10}
                  onChange={(e) => setUrlInput(e.target.value)}
                  value={urlInput}
                />
              <div id="qr-code-container" ></div>

              </Container>
              <CardFooter>
                {urlInput && (
                  
                  
                    <Button
                      colorScheme="blue"
                      mt={8}
                      size="lg"
                      onClick={getQrCode}
                    >
                      Generate
                    </Button>
                    
                  
                )}
              </CardFooter>
            </Card>
          </Center>
        </ChakraProvider>
      </div>
    </>
  );
}

createRoot(document.getElementById("root")).render(<Main />);
