"use client";

import "./globals.css";
import { Toaster } from "sonner";
import { ThemeProvider } from "@/components/providers/theme-provider";
import { Navbar } from "@/components/navbar";
import React from "react";
import "@rainbow-me/rainbowkit/styles.css";
import { getDefaultWallets, RainbowKitProvider } from "@rainbow-me/rainbowkit";

import { configureChains, createConfig, WagmiConfig } from "wagmi";
import { polygonMumbai, polygon } from "wagmi/chains";
import { alchemyProvider } from "wagmi/providers/alchemy";
import { jsonRpcProvider } from "wagmi/providers/jsonRpc";
import { publicProvider } from "wagmi/providers/public";

export const App = ({ children }: { children: React.ReactNode }) => {
  const { chains, publicClient } = configureChains(
    [polygon, polygonMumbai],
    [publicProvider()]
  );

  const { connectors } = getDefaultWallets({
    appName: "maji-mvp",
    projectId: "283f35690370bca68b2a5ed9b40533de",
    chains,
  });

  const wagmiConfig = createConfig({
    autoConnect: true,
    connectors,
    publicClient,
  });
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
      storageKey="motion-theme-dark"
    >
      <WagmiConfig config={wagmiConfig}>
        <RainbowKitProvider
          chains={chains}
          showRecentTransactions={true}
          coolMode
        >
          <Toaster position="bottom-center" />
          <Navbar />
          {children}
        </RainbowKitProvider>
      </WagmiConfig>
    </ThemeProvider>
  );
};
