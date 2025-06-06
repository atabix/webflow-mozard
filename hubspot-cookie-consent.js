var _hsp = (window._hsp = window._hsp || []);
_hsp.push([
  "addPrivacyConsentListener",
  function (consent) {
    var hasAnalyticsConsent = consent && (consent.allowed || (consent.categories && consent.categories.analytics));
    var hasAdsConsent = consent && (consent.allowed || (consent.categories && consent.categories.advertisement));
    var hasFunctionalConsent = consent && (consent.allowed || (consent.categories && consent.categories.functionality));

    gtag("consent", "update", {
      ad_storage: hasAdsConsent ? "granted" : "denied",
      analytics_storage: hasAnalyticsConsent ? "granted" : "denied",
      ad_user_data: hasAdsConsent ? "granted" : "denied",
      ad_personalization: hasAdsConsent ? "granted" : "denied",
      functionality_storage: hasFunctionalConsent ? "granted" : "denied",
    });

    if (hasAnalyticsConsent) {
      dataLayer.push({ event: "analytics_cookies_consent" });
    }

    if (hasAdsConsent) {
      dataLayer.push({ event: "advertisement_cookies_consent" });
    }

    if (hasFunctionalConsent) {
      dataLayer.push({ event: "functionality_cookies_consent" });
    }
  },
]);
