# ~~cart toggle~~

• clicking the "my cart" button -> toggles visibility of cart component

# ~~add to cart~~

• clicking "add to cart" on a product -> adds product to cart

# ~~edit cart~~

• change quantity using + and - buttons
• if quanity reaches 0 -> remove product from cart

# connecting to backend | use notification component to provide feedback

**redux reducers have to be side effect free and synchronous**
_instead you can put this into the component using useEffect_
_or inside of an action creator_

-   ~~create a function in the cart reducer to replace the entire cart state with a new cart state.~~
-   ~~copy the Notification.js and Notification.module.css files into our UI folder~~
-   ~~crate a ui-slice with redux, to manage the show noticiation state.~~
-   send data to backend on every state change
    -   do not send data on initial render
        ```javascript
        // define isInitial = true outside of a component
        let isInitial = true;
        // inside of the component's useEffect
        // you can return to stop the execution on first render, and then allow subsequent renders
        if (isInitial) {
        	isInitial = false;
        	return;
        }
        ```
-   retreive data from backend on initial render
-   display the notification component providing the status/title/message of the requests, this should show states for pending|success|error
