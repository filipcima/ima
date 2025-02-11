---
category: "page/renderer"
title: "ViewAdapter"
---

## ViewAdapter&nbsp;<a name="ViewAdapter" href="https://github.com/seznam/ima/tree/17.0.1/page/renderer/ViewAdapter.js#L27" target="_blank"><span class="icon"><i class="fas fa-external-link-alt fa-xs"></i></span></a>
An adapter component providing the current page controller's state to the
page view component through its properties.

**Kind**: global class  

* [ViewAdapter](#ViewAdapter)
    * [new ViewAdapter(props)](#new_ViewAdapter_new)
    * [.state](#ViewAdapter+state) : <code>Object.&lt;string, \*&gt;</code>
    * [._view](#ViewAdapter+_view) : <code>function</code>
    * [._getContextValue](#ViewAdapter+_getContextValue) : <code>function</code>
    * [.render()](#ViewAdapter+render)


* * *

### new ViewAdapter(props)&nbsp;<a name="new_ViewAdapter_new"></a>
Initializes the adapter component.


| Param | Type | Description |
| --- | --- | --- |
| props | <code>Object</code> | Component properties, containing the actual page view        and the initial page state to pass to the view. |


* * *

### viewAdapter.state : <code>Object.&lt;string, \*&gt;</code>&nbsp;<a name="ViewAdapter+state" href="https://github.com/seznam/ima/tree/17.0.1/page/renderer/ViewAdapter.js#L35" target="_blank"><span class="icon"><i class="fas fa-external-link-alt fa-xs"></i></span></a>
The current page state as provided by the controller.

**Kind**: instance property of [<code>ViewAdapter</code>](#ViewAdapter)  

* * *

### viewAdapter.\_view : <code>function</code>&nbsp;<a name="ViewAdapter+_view" href="https://github.com/seznam/ima/tree/17.0.1/page/renderer/ViewAdapter.js#L42" target="_blank"><span class="icon"><i class="fas fa-external-link-alt fa-xs"></i></span></a>
The actual page view to render.

**Kind**: instance property of [<code>ViewAdapter</code>](#ViewAdapter)  

* * *

### viewAdapter.\_getContextValue : <code>function</code>&nbsp;<a name="ViewAdapter+_getContextValue" href="https://github.com/seznam/ima/tree/17.0.1/page/renderer/ViewAdapter.js#L49" target="_blank"><span class="icon"><i class="fas fa-external-link-alt fa-xs"></i></span></a>
The memoized context value.

**Kind**: instance property of [<code>ViewAdapter</code>](#ViewAdapter)  

* * *

### viewAdapter.render()&nbsp;<a name="ViewAdapter+render" href="https://github.com/seznam/ima/tree/17.0.1/page/renderer/ViewAdapter.js#L59" target="_blank"><span class="icon"><i class="fas fa-external-link-alt fa-xs"></i></span></a>
**Kind**: instance method of [<code>ViewAdapter</code>](#ViewAdapter)  

* * *

