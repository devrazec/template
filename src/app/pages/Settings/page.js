"use client";

import React, { useContext, useEffect } from "react";
import { GlobalContext } from "../../context/GlobalContext";
import Layout from "../../components/Layout";
import { useLoading } from "../../hooks/useLoading";
import Image from "next/image";
import Slider from "@mui/material/Slider";
import Typography from "@mui/material/Typography";
import Switch from "@mui/material/Switch";
import TextField from "@mui/material/TextField";

// ── Reusable sub-components ──────────────────────────────────────────────────

function SettingsCard({ children, darkMode }) {
  return (
    <div
      style={{
        background: darkMode ? "#1f2937" : "#ffffff",
        borderRadius: 12,
        padding: "18px 18px 14px",
        marginBottom: 14,
        boxShadow: darkMode
          ? "0 1px 6px rgba(0,0,0,0.45)"
          : "0 1px 4px rgba(0,0,0,0.08)",
      }}
    >
      {children}
    </div>
  );
}

function SectionTitle({ children, darkMode }) {
  return (
    <Typography
      variant="subtitle1"
      style={{
        fontWeight: 700,
        fontSize: 14,
        letterSpacing: 0.4,
        color: darkMode ? "#e5e7eb" : "#1f2937",
        marginBottom: 14,
      }}
    >
      {children}
    </Typography>
  );
}

function RowLabel({ children, darkMode }) {
  return (
    <Typography
      variant="caption"
      style={{
        display: "block",
        color: darkMode ? "#9ca3af" : "#6b7280",
        marginBottom: 4,
        fontWeight: 500,
      }}
    >
      {children}
    </Typography>
  );
}

function ColorSelector({ label, value, onChange, colorList, darkMode }) {
  return (
    <div style={{ marginBottom: 14 }}>
      <Typography
        variant="caption"
        style={{
          display: "block",
          color: darkMode ? "#9ca3af" : "#6b7280",
          marginBottom: 6,
          fontWeight: 500,
        }}
      >
        {label}&nbsp;
        <span
          style={{
            fontWeight: 700,
            padding: "1px 6px",
            borderRadius: 4,
            background: value,
            color: value === "#ffffff" || value === "#f5f5f5" || value === "#ecf0f1" || value === "#bdc3c7"
              ? "#333"
              : "#fff",
            fontSize: 11,
          }}
        >
          {value}
        </span>
      </Typography>
      <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
        {colorList.map((c) => (
          <div
            key={c.key}
            title={c.key}
            onClick={() => onChange(c.key)}
            style={{
              width: 26,
              height: 26,
              borderRadius: "50%",
              background: c.key,
              border:
                value === c.key
                  ? "3px solid #3498db"
                  : darkMode
                  ? "2px solid #374151"
                  : "2px solid #e5e7eb",
              cursor: "pointer",
              boxSizing: "border-box",
              flexShrink: 0,
            }}
          />
        ))}
      </div>
    </div>
  );
}

function ImageStrip({ images, selected, onSelect, thumbSize = 80 }) {
  return (
    <div
      style={{
        display: "flex",
        gap: 8,
        overflowX: "auto",
        paddingBottom: 6,
        paddingTop: 2,
      }}
    >
      {images.map((img) => (
        <div
          key={img.key}
          onClick={() => onSelect(img.source)}
          style={{
            flexShrink: 0,
            width: thumbSize,
            height: thumbSize,
            borderRadius: 8,
            overflow: "hidden",
            border:
              selected === img.source
                ? "3px solid #3498db"
                : "2px solid transparent",
            cursor: "pointer",
            position: "relative",
          }}
        >
          <Image
            src={img.source}
            alt={img.key}
            fill
            sizes={`${thumbSize}px`}
            style={{ objectFit: "cover" }}
          />
        </div>
      ))}
    </div>
  );
}

// ── Main Page ────────────────────────────────────────────────────────────────

export default function SettingsPage() {
  const {
    darkMode,
    colorList,
    logoList,
    menuBackgroundList,
    logoSelected,
    setLogoSelected,
    logoSize,
    setLogoSize,
    logoBackgroundSelected,
    setLogoBackgroundSelected,
    logoTitle,
    setLogoTitle,
    logoTitleSize,
    setLogoTitleSize,
    logoTitleDarkColor,
    setLogoTitleDarkColor,
    logoTitleLightColor,
    setLogoTitleLightColor,
    logoSubTitle,
    setLogoSubTitle,
    logoSubTitleSize,
    setLogoSubTitleSize,
    logoSubTitleDarkColor,
    setLogoSubTitleDarkColor,
    logoSubTitleLightColor,
    setLogoSubTitleLightColor,
    enableLogoBackground,
    setEnableLogoBackground,
  } = useContext(GlobalContext);

  const { showLoading, hideLoading } = useLoading();

  useEffect(() => {
    showLoading();
    const timer = setTimeout(() => hideLoading(), 800);
    return () => clearTimeout(timer);
  }, []);

  const textColor = darkMode ? "#f3f4f6" : "#111827";
  const labelColor = darkMode ? "#9ca3af" : "#6b7280";

  return (
    <Layout>
      <div
        style={{
          padding: "20px 16px 64px",
          overflowY: "auto",
          height: "100%",
          background: darkMode ? "#111827" : "#f3f4f6",
        }}
      >
        <Typography
          variant="h6"
          style={{ fontWeight: 700, color: textColor, marginBottom: 18 }}
        >
          Logo Settings
        </Typography>

        {/* ── Preview ── */}
        <SettingsCard darkMode={darkMode}>
          <SectionTitle darkMode={darkMode}>Preview</SectionTitle>
          <div
            style={{
              borderRadius: 10,
              overflow: "hidden",
              height: 110,
              display: "flex",
              alignItems: "center",
              padding: "0 20px",
              gap: 14,
              backgroundImage:
                enableLogoBackground && logoBackgroundSelected
                  ? `url(${logoBackgroundSelected})`
                  : "none",
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundColor: enableLogoBackground
                ? undefined
                : darkMode
                ? "#374151"
                : "#f9fafb",
              border: darkMode ? "1px solid #374151" : "1px solid #e5e7eb",
            }}
          >
            {logoSelected && (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={logoSelected}
                alt="logo preview"
                style={{
                  width: logoSize.width,
                  height: logoSize.height,
                  objectFit: "contain",
                  flexShrink: 0,
                }}
              />
            )}
            <div>
              <div
                style={{
                  fontSize: logoTitleSize,
                  fontWeight: 700,
                  color: darkMode ? logoTitleLightColor : logoTitleDarkColor,
                  lineHeight: 1.2,
                }}
              >
                {logoTitle}
              </div>
              <div
                style={{
                  fontSize: logoSubTitleSize,
                  color: darkMode
                    ? logoSubTitleLightColor
                    : logoSubTitleDarkColor,
                  marginTop: 4,
                }}
              >
                {logoSubTitle}
              </div>
            </div>
          </div>
        </SettingsCard>

        {/* ── Logo Image Selector ── */}
        <SettingsCard darkMode={darkMode}>
          <SectionTitle darkMode={darkMode}>Logo Image</SectionTitle>
          <ImageStrip
            images={logoList}
            selected={logoSelected}
            onSelect={setLogoSelected}
            thumbSize={72}
          />
        </SettingsCard>

        {/* ── Logo Size ── */}
        <SettingsCard darkMode={darkMode}>
          <SectionTitle darkMode={darkMode}>Logo Size</SectionTitle>
          <RowLabel darkMode={darkMode}>Size: {logoSize.width}px</RowLabel>
          <Slider
            min={24}
            max={120}
            step={2}
            value={logoSize.width}
            onChange={(_, val) => setLogoSize({ width: val, height: val })}
            sx={{ color: "#3498db" }}
          />
        </SettingsCard>

        {/* ── Logo Background ── */}
        <SettingsCard darkMode={darkMode}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              marginBottom: enableLogoBackground ? 12 : 0,
            }}
          >
            <Typography
              variant="subtitle1"
              style={{
                fontWeight: 700,
                fontSize: 14,
                letterSpacing: 0.4,
                color: darkMode ? "#e5e7eb" : "#1f2937",
              }}
            >
              Logo Background
            </Typography>
            <Switch
              checked={!!enableLogoBackground}
              onChange={(e) => setEnableLogoBackground(e.target.checked)}
              size="small"
            />
          </div>
          {enableLogoBackground && (
            <ImageStrip
              images={menuBackgroundList}
              selected={logoBackgroundSelected}
              onSelect={setLogoBackgroundSelected}
              thumbSize={80}
            />
          )}
        </SettingsCard>

        {/* ── Logo Title ── */}
        <SettingsCard darkMode={darkMode}>
          <SectionTitle darkMode={darkMode}>Logo Title</SectionTitle>
          <TextField
            label="Title Text"
            value={logoTitle}
            onChange={(e) => setLogoTitle(e.target.value)}
            size="small"
            fullWidth
            style={{ marginBottom: 16 }}
            sx={{
              "& .MuiInputBase-input": { color: textColor },
              "& .MuiInputLabel-root": { color: labelColor },
              "& .MuiOutlinedInput-notchedOutline": {
                borderColor: darkMode ? "#374151" : "#d1d5db",
              },
            }}
          />
          <RowLabel darkMode={darkMode}>
            Font Size: {logoTitleSize}px
          </RowLabel>
          <Slider
            min={10}
            max={48}
            step={1}
            value={logoTitleSize}
            onChange={(_, val) => setLogoTitleSize(val)}
            sx={{ color: "#3498db", mb: 1 }}
          />
          <ColorSelector
            label="Dark Mode Color"
            value={logoTitleDarkColor}
            onChange={setLogoTitleDarkColor}
            colorList={colorList}
            darkMode={darkMode}
          />
          <ColorSelector
            label="Light Mode Color"
            value={logoTitleLightColor}
            onChange={setLogoTitleLightColor}
            colorList={colorList}
            darkMode={darkMode}
          />
        </SettingsCard>

        {/* ── Logo Subtitle ── */}
        <SettingsCard darkMode={darkMode}>
          <SectionTitle darkMode={darkMode}>Logo Subtitle</SectionTitle>
          <TextField
            label="Subtitle Text"
            value={logoSubTitle}
            onChange={(e) => setLogoSubTitle(e.target.value)}
            size="small"
            fullWidth
            style={{ marginBottom: 16 }}
            sx={{
              "& .MuiInputBase-input": { color: textColor },
              "& .MuiInputLabel-root": { color: labelColor },
              "& .MuiOutlinedInput-notchedOutline": {
                borderColor: darkMode ? "#374151" : "#d1d5db",
              },
            }}
          />
          <RowLabel darkMode={darkMode}>
            Font Size: {logoSubTitleSize}px
          </RowLabel>
          <Slider
            min={10}
            max={36}
            step={1}
            value={logoSubTitleSize}
            onChange={(_, val) => setLogoSubTitleSize(val)}
            sx={{ color: "#3498db", mb: 1 }}
          />
          <ColorSelector
            label="Dark Mode Color"
            value={logoSubTitleDarkColor}
            onChange={setLogoSubTitleDarkColor}
            colorList={colorList}
            darkMode={darkMode}
          />
          <ColorSelector
            label="Light Mode Color"
            value={logoSubTitleLightColor}
            onChange={setLogoSubTitleLightColor}
            colorList={colorList}
            darkMode={darkMode}
          />
        </SettingsCard>
      </div>
    </Layout>
  );
}
