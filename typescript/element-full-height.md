### <span style="color:#00FF00">TLDR: Use `style="height: calc(100vh - 140px)"` for wrapper div to use all available height!</span>

----

## Advantages of Using `style="height: calc(100vh - 140px)"` Over Tailwind's `h-full`

### 1. Dynamic Height Adjustment
- **`calc(100vh - 140px)`** adjusts the height based on the **viewport height** (`100vh`) minus a **fixed pixel offset** (`140px`), providing precise control for elements with fixed headers, footers, or margins.
- **`h-full`** sets the height to **100%** of the parent container's height and does **not account** for viewport height directly, which can cause issues with nested containers or content overflow.

---

### 2. Control Over Fixed Offsets
- **`calc()`** allows subtraction of a **fixed size** directly from the viewport height, ensuring better layout management when needing specific offsets.
- **`h-full`** does **not** support such precise adjustments without modifying the parent element’s height explicitly.

---

### 3. Viewport Awareness
- **`100vh`** is tied directly to the **viewport height**, ensuring the element fills the screen height minus the defined offset.
- **`h-full`** depends on the **parent's height**, which may vary based on content and other constraints.

---

### 4. Tailwind Limitation
- Tailwind’s default height utilities (`h-full`, `h-screen`, `h-[px]`) do **not support calculations** involving both viewport units and pixel values directly.
- Custom calculations like `calc()` require **inline styles** or **extending** Tailwind’s configuration.

---

### ✅ **Use Case Summary**
- Use **`height: calc(100vh - 140px)`** when you need **precise control** over height adjustments based on the **viewport**.
- Use **`h-full`** when you need an element to fill **100% of the parent** container's height without viewport-based adjustments.

**Tip:** If you need viewport-based calculations frequently in a Tailwind project, consider extending your **Tailwind config** to support custom utilities.
