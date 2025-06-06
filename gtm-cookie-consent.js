    window.dataLayer = window.dataLayer || [];
    function gtag() {
        dataLayer.push(arguments);
    }
    var consentOptions = {
        analytics_storage: "denied",
        ad_storage: "denied",
        ad_user_data: "denied",
        ad_personalization: "denied",
        functionality_storage: "denied",
    };

    var cookieValue = document.cookie.match("(^|;)\\s*" + "__hs_cookie_cat_pref" + "\\s*=\\s*([^;]+)");

    if (cookieValue) {
        var consentString = cookieValue.pop();
        var consents = {};

        consentString.split("_").forEach(function (item) {
            var parts = item.split(":");
            var key = parts[0].trim();
            var value = parts[1].trim();
            consents[key] = value === "true" ? "granted" : "denied";
        });

        consentOptions.analytics_storage = consents["1"] || "denied";
        consentOptions.ad_storage = consents["2"] || "denied";
        consentOptions.ad_user_data = consents["2"] || "denied";
        consentOptions.ad_personalization = consents["2"] || "denied";
        consentOptions.functionality_storage = consents["3"] || "denied";
    }

    gtag("consent", "default", consentOptions);