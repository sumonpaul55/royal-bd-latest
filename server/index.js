import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import { PassThrough } from "node:stream";
import { createReadableStreamFromReadable } from "@react-router/node";
import { ServerRouter, useParams, useLoaderData, useActionData, useMatches, useRouteError, Meta, Links, ScrollRestoration, Scripts, Outlet, isRouteErrorResponse, Link } from "react-router";
import { isbot } from "isbot";
import { renderToPipeableStream } from "react-dom/server";
import { createElement, useState } from "react";
import { Form, Input, Checkbox } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import { RxAvatar } from "react-icons/rx";
const streamTimeout = 5e3;
function handleRequest(request, responseStatusCode, responseHeaders, routerContext, loadContext) {
  return new Promise((resolve, reject) => {
    let shellRendered = false;
    let userAgent = request.headers.get("user-agent");
    let readyOption = userAgent && isbot(userAgent) || routerContext.isSpaMode ? "onAllReady" : "onShellReady";
    const { pipe, abort } = renderToPipeableStream(
      /* @__PURE__ */ jsx(ServerRouter, { context: routerContext, url: request.url }),
      {
        [readyOption]() {
          shellRendered = true;
          const body = new PassThrough();
          const stream = createReadableStreamFromReadable(body);
          responseHeaders.set("Content-Type", "text/html");
          resolve(
            new Response(stream, {
              headers: responseHeaders,
              status: responseStatusCode
            })
          );
          pipe(body);
        },
        onShellError(error) {
          reject(error);
        },
        onError(error) {
          responseStatusCode = 500;
          if (shellRendered) {
            console.error(error);
          }
        }
      }
    );
    setTimeout(abort, streamTimeout + 1e3);
  });
}
const entryServer = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: handleRequest,
  streamTimeout
}, Symbol.toStringTag, { value: "Module" }));
function withComponentProps(Component) {
  return function Wrapped() {
    const props = {
      params: useParams(),
      loaderData: useLoaderData(),
      actionData: useActionData(),
      matches: useMatches()
    };
    return createElement(Component, props);
  };
}
function withErrorBoundaryProps(ErrorBoundary3) {
  return function Wrapped() {
    const props = {
      params: useParams(),
      loaderData: useLoaderData(),
      actionData: useActionData(),
      error: useRouteError()
    };
    return createElement(ErrorBoundary3, props);
  };
}
const stylesheet = "/assets/app-C5C3-P52.css";
const links = () => [{
  rel: "preconnect",
  href: "https://fonts.googleapis.com"
}, {
  rel: "preconnect",
  href: "https://fonts.gstatic.com",
  crossOrigin: "anonymous"
}, {
  rel: "stylesheet",
  href: "https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap"
}, {
  rel: "stylesheet",
  href: stylesheet
}];
function Layout({
  children
}) {
  return /* @__PURE__ */ jsxs("html", {
    lang: "en",
    children: [/* @__PURE__ */ jsxs("head", {
      children: [/* @__PURE__ */ jsx("meta", {
        charSet: "utf-8"
      }), /* @__PURE__ */ jsx("meta", {
        name: "viewport",
        content: "width=device-width, initial-scale=1"
      }), /* @__PURE__ */ jsx(Meta, {}), /* @__PURE__ */ jsx(Links, {})]
    }), /* @__PURE__ */ jsxs("body", {
      children: [children, /* @__PURE__ */ jsx(ScrollRestoration, {}), /* @__PURE__ */ jsx(Scripts, {})]
    })]
  });
}
const root = withComponentProps(function App() {
  return /* @__PURE__ */ jsx(Fragment, {
    children: /* @__PURE__ */ jsx(Outlet, {})
  });
});
const ErrorBoundary$1 = withErrorBoundaryProps(function ErrorBoundary2({
  error
}) {
  let message = "Oops!";
  let details = "An unexpected error occurred.";
  let stack;
  if (isRouteErrorResponse(error)) {
    message = error.status === 404 ? "404" : "Error";
    details = error.status === 404 ? "The requested page could not be found." : error.statusText || details;
  }
  return /* @__PURE__ */ jsxs("main", {
    className: "pt-16 p-4 container mx-auto",
    children: [/* @__PURE__ */ jsx("h1", {
      children: message
    }), /* @__PURE__ */ jsx("p", {
      children: details
    }), stack]
  });
});
const route0 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  ErrorBoundary: ErrorBoundary$1,
  Layout,
  default: root,
  links
}, Symbol.toStringTag, { value: "Module" }));
function meta$2({}) {
  return [{
    title: "Royal bd || Welcome"
  }, {
    name: "description",
    content: "Welcome to Royalbd!"
  }];
}
const welcome = withComponentProps(function Welcome() {
  return /* @__PURE__ */ jsx("div", {
    className: "h-screen w-screen bg-slate-200 flex items-center justify-center",
    children: /* @__PURE__ */ jsxs("div", {
      children: [/* @__PURE__ */ jsx("h1", {
        className: "font-bold text-xl md:text-3xl lg:text-4xl",
        children: "Welcome to RoyalBd"
      }), /* @__PURE__ */ jsxs("div", {
        className: "mt-10 flex gap-5 items-center justify-center",
        children: [/* @__PURE__ */ jsx(Link, {
          className: "border px-4 py-1 border-white bg-slate-600 text-white rounded-md",
          to: "/login",
          children: "Login"
        }), /* @__PURE__ */ jsx(Link, {
          className: "border px-4 py-1 border-white bg-slate-600 text-white rounded-md",
          to: "/dashboard",
          children: "Dashboard"
        })]
      })]
    })
  });
});
const route1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: welcome,
  meta: meta$2
}, Symbol.toStringTag, { value: "Module" }));
function meta$1({}) {
  return [{
    title: "Royal bd || Furnitures"
  }, {
    name: "description",
    content: "Welcome to Royalbd!"
  }];
}
const login = withComponentProps(function Login() {
  const onFinish = (values) => {
    console.log("Login form submitted:", values);
  };
  return /* @__PURE__ */ jsx("section", {
    className: "min-h-screen bg-gray-100 w-screen flex items-center justify-center",
    children: /* @__PURE__ */ jsxs("div", {
      className: "w-full max-w-md p-6 bg-white rounded-lg shadow-md",
      children: [/* @__PURE__ */ jsx("h1", {
        className: "text-2xl font-bold text-center mb-6",
        children: "Login"
      }), /* @__PURE__ */ jsxs(Form, {
        name: "login-form",
        initialValues: {
          remember: true
        },
        onFinish,
        layout: "vertical",
        children: [/* @__PURE__ */ jsx(Form.Item, {
          name: "email",
          label: "Email",
          rules: [{
            required: true,
            message: "Please input your email!"
          }, {
            type: "email",
            message: "Please enter a valid email!"
          }],
          children: /* @__PURE__ */ jsx(Input, {
            prefix: /* @__PURE__ */ jsx(UserOutlined, {}),
            placeholder: "Email"
          })
        }), /* @__PURE__ */ jsx(Form.Item, {
          name: "password",
          label: "Password",
          rules: [{
            required: true,
            message: "Please input your password!"
          }],
          children: /* @__PURE__ */ jsx(Input.Password, {
            prefix: /* @__PURE__ */ jsx(LockOutlined, {}),
            placeholder: "Password"
          })
        }), /* @__PURE__ */ jsx(Form.Item, {
          name: "remember",
          valuePropName: "checked",
          children: /* @__PURE__ */ jsx(Checkbox, {
            children: "Remember me"
          })
        }), /* @__PURE__ */ jsx(Link, {
          to: "/dashboard",
          className: "bg-blue-500 text-white w-full block py-1 rounded text-center font- text-xl",
          children: "Login"
        })]
      }), /* @__PURE__ */ jsxs("div", {
        className: "text-center mt-4",
        children: [/* @__PURE__ */ jsx("a", {
          href: "/forgot-password",
          className: "text-blue-500 hover:underline",
          children: "Forgot Password?"
        }), /* @__PURE__ */ jsxs("p", {
          className: "mt-2",
          children: ["Don't have an account?", " ", /* @__PURE__ */ jsx("a", {
            href: "/register",
            className: "text-blue-500 hover:underline",
            children: "Register here"
          })]
        })]
      })]
    })
  });
});
const route2 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: login,
  meta: meta$1
}, Symbol.toStringTag, { value: "Module" }));
const dashboardLayotu = withComponentProps(function App2() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  return /* @__PURE__ */ jsx(Fragment, {
    children: /* @__PURE__ */ jsxs("div", {
      className: "flex min-h-screen",
      children: [/* @__PURE__ */ jsx("div", {
        className: `fixed md:static md:w-1/5 bg-gray-800 text-white transform ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"} transition-transform duration-300 ease-in-out z-50 md:translate-x-0 h-screen border-r`,
        children: /* @__PURE__ */ jsxs("div", {
          className: "p-4",
          children: [/* @__PURE__ */ jsx("h2", {
            className: "text-2xl font-bold border-b pb-3 border-slate-600",
            children: "Dashboard"
          }), /* @__PURE__ */ jsxs("ul", {
            className: "mt-6 space-y-2",
            children: [/* @__PURE__ */ jsx("li", {
              children: /* @__PURE__ */ jsx(Link, {
                to: "/dashboard",
                className: "block py-2 px-4 rounded hover:bg-gray-700 border-b border-slate-500",
                children: "Home"
              })
            }), /* @__PURE__ */ jsx("li", {
              children: /* @__PURE__ */ jsx(Link, {
                to: "/dashboard/about-us",
                className: "block py-2 px-4 rounded hover:bg-gray-700 border-b border-slate-500",
                children: "About"
              })
            }), /* @__PURE__ */ jsx("li", {
              children: /* @__PURE__ */ jsx(Link, {
                to: "/dashboard/contact",
                className: "block py-2 px-4 rounded hover:bg-gray-700 border-b border-slate-500",
                children: "Contact"
              })
            })]
          })]
        })
      }), /* @__PURE__ */ jsxs("div", {
        className: "flex-1 md:ml-1/4 bg-gray-100",
        children: [/* @__PURE__ */ jsx("div", {
          className: "bg-gray-800 text-white p-4 flex md:hidden",
          children: /* @__PURE__ */ jsxs("div", {
            className: "flex justify-between items-center w-full",
            children: [/* @__PURE__ */ jsxs("div", {
              className: "flex gap-2",
              children: [/* @__PURE__ */ jsx("h1", {
                className: "text-lg font-bold",
                children: "Dashboard"
              }), /* @__PURE__ */ jsx("button", {
                onClick: () => setIsSidebarOpen(!isSidebarOpen),
                className: `mr-4 focus:outline-none z-50 ${isSidebarOpen ? "ml-10" : ""}`,
                children: /* @__PURE__ */ jsx("svg", {
                  xmlns: "http://www.w3.org/2000/svg",
                  className: "h-6 w-6",
                  fill: "none",
                  viewBox: "0 0 24 24",
                  stroke: "currentColor",
                  strokeWidth: 2,
                  children: /* @__PURE__ */ jsx("path", {
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    d: "M4 6h16M4 12h16m-7 6h7"
                  })
                })
              })]
            }), /* @__PURE__ */ jsx("div", {
              className: "md:hidden",
              children: /* @__PURE__ */ jsxs(Link, {
                to: "/login",
                className: "flex gap-1 items-center border px-2 py-1 rounded",
                children: [/* @__PURE__ */ jsx(RxAvatar, {
                  size: 20
                }), "User Name"]
              })
            })]
          })
        }), /* @__PURE__ */ jsxs("div", {
          className: "",
          children: [/* @__PURE__ */ jsxs("div", {
            className: "bg-gray-800 py-3 text-white px-3 md:px-6 md:flex justify-between items-center h-[60px] hidden",
            children: [/* @__PURE__ */ jsx("h1", {
              className: "text-xl font-bold",
              children: "Welcome to the Dashboard"
            }), /* @__PURE__ */ jsx("div", {
              className: "",
              children: /* @__PURE__ */ jsxs(Link, {
                to: "/login",
                className: "flex gap-1 items-center border px-2 py-1 rounded",
                children: [/* @__PURE__ */ jsx(RxAvatar, {
                  size: 20
                }), "User Name"]
              })
            })]
          }), /* @__PURE__ */ jsx("div", {
            className: "p-3 md:p-5 max-h-[calc(100vh-60px)] overflow-y-auto",
            children: /* @__PURE__ */ jsx(Outlet, {})
          })]
        })]
      })]
    })
  });
});
const ErrorBoundary = withErrorBoundaryProps(function ErrorBoundary22({
  error
}) {
  let message = "Oops!";
  let details = "An unexpected error occurred.";
  let stack;
  if (isRouteErrorResponse(error)) {
    message = error.status === 404 ? "404" : "Error";
    details = error.status === 404 ? "The requested page could not be found." : error.statusText || details;
  }
  return /* @__PURE__ */ jsxs("main", {
    className: "pt-16 p-4 container mx-auto",
    children: [/* @__PURE__ */ jsx("h1", {
      children: message
    }), /* @__PURE__ */ jsx("p", {
      children: details
    }), stack]
  });
});
const route3 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  ErrorBoundary,
  default: dashboardLayotu
}, Symbol.toStringTag, { value: "Module" }));
const dashboardHome = withComponentProps(function DashboardHome() {
  const cards = [{
    title: "Total Users",
    value: 1200,
    icon: "👤",
    bgColor: "bg-blue-500"
  }, {
    title: "Total Products",
    value: 350,
    icon: "🛋️",
    bgColor: "bg-green-500"
  }, {
    title: "Total Orders",
    value: 450,
    icon: "🛒",
    bgColor: "bg-yellow-500"
  }, {
    title: "Admins",
    value: 5,
    icon: "🛡️",
    bgColor: "bg-red-500"
  }, {
    title: "Pending Orders",
    value: 20,
    icon: "⌛",
    bgColor: "bg-purple-500"
  }, {
    title: "Revenue",
    value: "৳ 1,200,000",
    icon: "💰",
    bgColor: "bg-indigo-500"
  }];
  return /* @__PURE__ */ jsxs("div", {
    className: "min-h-screen bg-gray-100 px-0 md:px-6 flex justify-between flex-col",
    children: [/* @__PURE__ */ jsxs("div", {
      children: [/* @__PURE__ */ jsxs("header", {
        className: "flex items-center justify-between mb-7",
        children: [/* @__PURE__ */ jsx("h1", {
          className: "md:text-2xl font-bold text-gray-800",
          children: "Admin Dashboard"
        }), /* @__PURE__ */ jsxs("div", {
          className: "text-sm md:text-base",
          children: [/* @__PURE__ */ jsx("p", {
            className: "text-gray-600",
            children: "January 10, 2025"
          }), /* @__PURE__ */ jsx("p", {
            className: "font-semibold",
            children: "Welcome, Admin!"
          })]
        })]
      }), /* @__PURE__ */ jsx("div", {
        className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6",
        children: cards.map((card, index) => /* @__PURE__ */ jsx("div", {
          className: `p-6 rounded-lg shadow-md text-white ${card.bgColor}`,
          children: /* @__PURE__ */ jsxs("div", {
            className: "flex items-center justify-between",
            children: [/* @__PURE__ */ jsxs("div", {
              children: [/* @__PURE__ */ jsx("h2", {
                className: "text-lg font-semibold",
                children: card.title
              }), /* @__PURE__ */ jsx("p", {
                className: "text-2xl font-bold mt-2",
                children: card.value
              })]
            }), /* @__PURE__ */ jsx("div", {
              className: "text-4xl",
              children: card.icon
            })]
          })
        }, index))
      })]
    }), /* @__PURE__ */ jsx("footer", {
      className: "mt-12 text-center text-gray-600",
      children: "© 2025 RoyalBD | Admin Dashboard"
    })]
  });
});
const route4 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: dashboardHome
}, Symbol.toStringTag, { value: "Module" }));
const AboutUs = () => {
  return /* @__PURE__ */ jsx("div", { className: "container mx-auto", children: /* @__PURE__ */ jsx("h1", { className: "text-2xl text-center font-bold", children: "About us page" }) });
};
function meta({}) {
  return [{
    title: "Royal bd || About us"
  }, {
    name: "description",
    content: "Welcome to Royalbd!"
  }];
}
const about = withComponentProps(function About() {
  return /* @__PURE__ */ jsx("div", {
    children: /* @__PURE__ */ jsx(AboutUs, {})
  });
});
const route5 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: about,
  meta
}, Symbol.toStringTag, { value: "Module" }));
const contact = withComponentProps(function Contact() {
  return /* @__PURE__ */ jsx("div", {
    children: "contact"
  });
});
const route6 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: contact
}, Symbol.toStringTag, { value: "Module" }));
const serverManifest = { "entry": { "module": "/assets/entry.client-CP1cSCDc.js", "imports": ["/assets/chunk-K6AXKMTT-Bh8OeGK-.js", "/assets/index-BoZt2DP8.js"], "css": [] }, "routes": { "root": { "id": "root", "parentId": void 0, "path": "", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": true, "module": "/assets/root-BjO8-ycv.js", "imports": ["/assets/chunk-K6AXKMTT-Bh8OeGK-.js", "/assets/index-BoZt2DP8.js", "/assets/with-props-z_wMS7C1.js"], "css": [] }, "routes/welcome": { "id": "routes/welcome", "parentId": "root", "path": void 0, "index": true, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": false, "module": "/assets/welcome-BzGYQkVh.js", "imports": ["/assets/with-props-z_wMS7C1.js", "/assets/chunk-K6AXKMTT-Bh8OeGK-.js"], "css": [] }, "auth/login": { "id": "auth/login", "parentId": "root", "path": "login", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": false, "module": "/assets/login-4-0R2jqq.js", "imports": ["/assets/with-props-z_wMS7C1.js", "/assets/chunk-K6AXKMTT-Bh8OeGK-.js", "/assets/index-BoZt2DP8.js"], "css": [] }, "dashboard/dashboardLayotu": { "id": "dashboard/dashboardLayotu", "parentId": "root", "path": "dashboard", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": true, "module": "/assets/dashboardLayotu-GmswyYPj.js", "imports": ["/assets/with-props-z_wMS7C1.js", "/assets/chunk-K6AXKMTT-Bh8OeGK-.js"], "css": [] }, "routes/dashboardHome": { "id": "routes/dashboardHome", "parentId": "dashboard/dashboardLayotu", "path": void 0, "index": true, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": false, "module": "/assets/dashboardHome-_QW87shO.js", "imports": ["/assets/with-props-z_wMS7C1.js", "/assets/chunk-K6AXKMTT-Bh8OeGK-.js"], "css": [] }, "routes/about": { "id": "routes/about", "parentId": "dashboard/dashboardLayotu", "path": "about-us", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": false, "module": "/assets/about-CtMsjwEe.js", "imports": ["/assets/with-props-z_wMS7C1.js", "/assets/chunk-K6AXKMTT-Bh8OeGK-.js"], "css": [] }, "routes/contact": { "id": "routes/contact", "parentId": "dashboard/dashboardLayotu", "path": "contact", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": false, "module": "/assets/contact-hsqpIlGx.js", "imports": ["/assets/with-props-z_wMS7C1.js", "/assets/chunk-K6AXKMTT-Bh8OeGK-.js"], "css": [] } }, "url": "/assets/manifest-6fb6137f.js", "version": "6fb6137f" };
const assetsBuildDirectory = "build\\client";
const basename = "/";
const future = { "unstable_optimizeDeps": false };
const isSpaMode = false;
const publicPath = "/";
const entry = { module: entryServer };
const routes = {
  "root": {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: route0
  },
  "routes/welcome": {
    id: "routes/welcome",
    parentId: "root",
    path: void 0,
    index: true,
    caseSensitive: void 0,
    module: route1
  },
  "auth/login": {
    id: "auth/login",
    parentId: "root",
    path: "login",
    index: void 0,
    caseSensitive: void 0,
    module: route2
  },
  "dashboard/dashboardLayotu": {
    id: "dashboard/dashboardLayotu",
    parentId: "root",
    path: "dashboard",
    index: void 0,
    caseSensitive: void 0,
    module: route3
  },
  "routes/dashboardHome": {
    id: "routes/dashboardHome",
    parentId: "dashboard/dashboardLayotu",
    path: void 0,
    index: true,
    caseSensitive: void 0,
    module: route4
  },
  "routes/about": {
    id: "routes/about",
    parentId: "dashboard/dashboardLayotu",
    path: "about-us",
    index: void 0,
    caseSensitive: void 0,
    module: route5
  },
  "routes/contact": {
    id: "routes/contact",
    parentId: "dashboard/dashboardLayotu",
    path: "contact",
    index: void 0,
    caseSensitive: void 0,
    module: route6
  }
};
export {
  serverManifest as assets,
  assetsBuildDirectory,
  basename,
  entry,
  future,
  isSpaMode,
  publicPath,
  routes
};
