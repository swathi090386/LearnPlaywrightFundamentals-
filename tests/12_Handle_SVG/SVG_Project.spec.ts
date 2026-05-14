import { test, expect, Page } from '@playwright/test';

/**
 * SVG Element Testing with Playwright - TypeScript Boilerplate
 * Comprehensive guide for interacting with SVG elements
 */

test.describe('SVG Elements Handling', () => {
  let page: Page;

  test.beforeEach(async ({ browser }) => {
    // Create a new page for each test
    page = await browser.newPage();
    // Navigate to your SVG test page
    // await page.goto('https://your-svg-test-url.com');
  });

  test.afterEach(async () => {
    // Clean up after each test
    await page.close();
  });

  // ==================== BASIC SVG SELECTION ====================

  test('Select SVG elements by tag name', async () => {
    // Select SVG element
    const svgElement = await page.locator('svg');
    await expect(svgElement).toBeVisible();

    // Select circles within SVG
    const circles = await page.locator('svg circle');
    const circleCount = await circles.count();
    console.log(`Found ${circleCount} circles`);

    // Select paths
    const paths = await page.locator('svg path');
    const pathCount = await paths.count();
    console.log(`Found ${pathCount} paths`);

    // Select rectangles
    const rectangles = await page.locator('svg rect');
    const rectCount = await rectangles.count();
    console.log(`Found ${rectCount} rectangles`);
  });

  test('Select SVG elements by attributes', async () => {
    // Select element with specific id
    const svgById = await page.locator('svg#my-svg');
    await expect(svgById).toBeVisible();

    // Select element with specific class
    const svgByClass = await page.locator('svg.chart-container');
    await expect(svgByClass).toBeVisible();

    // Select element with data attribute
    const svgByDataAttr = await page.locator('svg[data-testid="chart"]');
    await expect(svgByDataAttr).toBeVisible();

    // Select circle by fill color
    const redCircle = await page.locator('svg circle[fill="red"]');
    await expect(redCircle).toBeVisible();
  });

  test('Select nested SVG elements', async () => {
    // Select element within group
    const groupElement = await page.locator('svg g#chart-group');
    await expect(groupElement).toBeVisible();

    // Select nested elements using CSS selectors
    const nestedElement = await page.locator('svg g rect');
    await expect(nestedElement).toBeVisible();

    // Select specific nested element
    const specificNested = await page.locator('svg g[id="group1"] circle');
    await expect(specificNested).toBeVisible();
  });

  // ==================== SVG ATTRIBUTE MANIPULATION ====================

  test('Get and verify SVG attributes', async () => {
    // Get SVG viewBox attribute
    const svgViewBox = await page.locator('svg').getAttribute('viewBox');
    console.log(`SVG ViewBox: ${svgViewBox}`);
    expect(svgViewBox).toBeTruthy();

    // Get circle attributes
    const circle = await page.locator('svg circle').first();
    const cx = await circle.getAttribute('cx');
    const cy = await circle.getAttribute('cy');
    const radius = await circle.getAttribute('r');
    console.log(`Circle: cx=${cx}, cy=${cy}, r=${radius}`);

    // Get fill color
    const fillColor = await circle.getAttribute('fill');
    console.log(`Circle fill color: ${fillColor}`);

    // Get stroke properties
    const strokeWidth = await circle.getAttribute('stroke-width');
    const strokeColor = await circle.getAttribute('stroke');
    console.log(`Stroke: width=${strokeWidth}, color=${strokeColor}`);
  });

  test('Verify SVG dimensions', async () => {
    const svg = await page.locator('svg');
    const width = await svg.getAttribute('width');
    const height = await svg.getAttribute('height');
    console.log(`SVG dimensions: ${width}x${height}`);

    // Get bounding box
    const box = await svg.boundingBox();
    if (box) {
      console.log(`SVG position: x=${box.x}, y=${box.y}`);
      console.log(`SVG size: width=${box.width}, height=${box.height}`);
    }
  });

  // ==================== SVG INTERACTIONS ====================

  test('Click SVG elements', async () => {
    // Click on SVG element
    const svgCircle = await page.locator('svg circle').first();
    await svgCircle.click();

    // Verify click action (check for visual feedback or state change)
    // await expect(svgCircle).toHaveClass('selected');
  });

  test('Hover over SVG elements', async () => {
    // Hover over SVG element
    const svgElement = await page.locator('svg g').first();
    await svgElement.hover();

    // Verify hover state
    // Tooltip might appear
    const tooltip = await page.locator('[role="tooltip"]');
    // await expect(tooltip).toBeVisible();
  });

  test('Double-click SVG elements', async () => {
    const svgElement = await page.locator('svg path').first();
    await svgElement.dblclick();

    // Verify double-click action
    // await expect(svgElement).toHaveClass('active');
  });

  test('Right-click SVG elements (context menu)', async () => {
    const svgElement = await page.locator('svg circle').first();
    await svgElement.click({ button: 'right' });

    // Verify context menu appears
    // const contextMenu = await page.locator('[role="menu"]');
    // await expect(contextMenu).toBeVisible();
  });

  // ==================== SVG VISIBILITY AND STATE ====================

  test('Check SVG element visibility', async () => {
    const svgElement = await page.locator('svg');
    await expect(svgElement).toBeVisible();
    await expect(svgElement).toBeInViewport();
  });

  test('Check SVG element opacity and display', async () => {
    const circle = await page.locator('svg circle').first();

    // Get computed styles
    const opacity = await circle.evaluate((el) => {
      return window.getComputedStyle(el).opacity;
    });
    console.log(`Circle opacity: ${opacity}`);

    const display = await circle.evaluate((el) => {
      return window.getComputedStyle(el).display;
    });
    console.log(`Circle display: ${display}`);

    const visibility = await circle.evaluate((el) => {
      return window.getComputedStyle(el).visibility;
    });
    console.log(`Circle visibility: ${visibility}`);
  });

  test('Check SVG element classes', async () => {
    const svgElement = await page.locator('svg circle').first();
    
    // Get class attribute
    const classList = await svgElement.getAttribute('class');
    console.log(`Classes: ${classList}`);

    // Check for specific class
    const hasClass = await svgElement.evaluate((el) => {
      return el.classList.contains('active');
    });
    console.log(`Has 'active' class: ${hasClass}`);
  });

  // ==================== SVG COORDINATE OPERATIONS ====================

  test('Get SVG element coordinates', async () => {
    const circle = await page.locator('svg circle').first();

    // Get screen coordinates
    const box = await circle.boundingBox();
    if (box) {
      const centerX = box.x + box.width / 2;
      const centerY = box.y + box.height / 2;
      console.log(`Circle center: (${centerX}, ${centerY})`);
    }

    // Get SVG coordinates
    const cx = await circle.getAttribute('cx');
    const cy = await circle.getAttribute('cy');
    console.log(`SVG coordinates: (${cx}, ${cy})`);
  });

  test('Drag SVG element to new position', async () => {
    const circle = await page.locator('svg circle').first();
    
    // Get original position
    const originalBox = await circle.boundingBox();
    console.log(`Original position: x=${originalBox?.x}, y=${originalBox?.y}`);

    // Drag to new position
    await circle.dragTo(page.locator('svg rect').first());

    // Verify new position
    const newBox = await circle.boundingBox();
    console.log(`New position: x=${newBox?.x}, y=${newBox?.y}`);
  });

  test('Scroll SVG into view', async () => {
    const svgElement = await page.locator('svg');
    await svgElement.scrollIntoViewIfNeeded();
    await expect(svgElement).toBeInViewport();
  });

  // ==================== SVG CONTENT VERIFICATION ====================

  test('Verify SVG text elements', async () => {
    // Select text elements within SVG
    const textElements = await page.locator('svg text');
    const textCount = await textElements.count();
    console.log(`Found ${textCount} text elements`);

    // Get text content
    for (let i = 0; i < textCount; i++) {
      const text = await textElements.nth(i).textContent();
      console.log(`Text ${i}: ${text}`);
    }

    // Verify specific text exists
    const specificText = await page.locator('svg text:has-text("Label")');
    await expect(specificText).toBeVisible();
  });

  test('Verify SVG animation properties', async () => {
    // Check if animate element exists
    const animateElements = await page.locator('svg animate');
    const animateCount = await animateElements.count();
    console.log(`Found ${animateCount} animate elements`);

    // Get animation attributes
    const firstAnimate = await animateElements.first();
    const attributeName = await firstAnimate.getAttribute('attributeName');
    const from = await firstAnimate.getAttribute('from');
    const to = await firstAnimate.getAttribute('to');
    const duration = await firstAnimate.getAttribute('dur');
    console.log(`Animation: ${attributeName} from ${from} to ${to}, duration: ${duration}`);
  });

  // ==================== SVG STYLING ====================

  test('Get SVG element styling', async () => {
    const circle = await page.locator('svg circle').first();

    // Get multiple style properties
    const styles = await circle.evaluate((el) => {
      const computed = window.getComputedStyle(el);
      return {
        fill: computed.fill,
        stroke: computed.stroke,
        strokeWidth: computed.strokeWidth,
        opacity: computed.opacity,
        transform: computed.transform,
      };
    });
    console.log('Circle styles:', styles);
  });

  test('Verify SVG fill and stroke', async () => {
    const circle = await page.locator('svg circle').first();

    // Get fill
    const fill = await circle.getAttribute('fill');
    console.log(`Fill: ${fill}`);

    // Get stroke
    const stroke = await circle.getAttribute('stroke');
    console.log(`Stroke: ${stroke}`);

    // Get stroke-width
    const strokeWidth = await circle.getAttribute('stroke-width');
    console.log(`Stroke Width: ${strokeWidth}`);

    // Verify non-empty fill
    expect(fill).not.toBeNull();
  });

  // ==================== SVG EVENTS ====================

  test('Trigger and verify SVG events', async () => {
    const circle = await page.locator('svg circle').first();

    // Listen for events
    await circle.evaluate((el) => {
      (el as any).clickCount = 0;
      el.addEventListener('click', () => {
        (el as any).clickCount++;
      });
    });

    // Trigger click
    await circle.click();

    // Verify event was triggered
    const clickCount = await circle.evaluate((el) => (el as any).clickCount);
    console.log(`Click count: ${clickCount}`);
  });

  test('Check for SVG mouseover events', async () => {
    const circle = await page.locator('svg circle').first();

    // Set up event listener
    await circle.evaluate((el) => {
      (el as any).hoverCount = 0;
      el.addEventListener('mouseover', () => {
        (el as any).hoverCount++;
      });
    });

    // Trigger hover
    await circle.hover();

    // Verify event was triggered
    const hoverCount = await circle.evaluate((el) => (el as any).hoverCount);
    console.log(`Hover count: ${hoverCount}`);
  });

  // ==================== SVG FILTERING AND SEARCHING ====================

  test('Filter and find specific SVG elements', async () => {
    // Find all circles with specific fill color
    const redCircles = await page.locator('svg circle[fill="red"]');
    const redCount = await redCircles.count();
    console.log(`Red circles: ${redCount}`);

    // Find elements with specific stroke
    const strokeElements = await page.locator('svg [stroke]');
    const strokeCount = await strokeElements.count();
    console.log(`Elements with stroke: ${strokeCount}`);

    // Find elements with data attributes
    const dataElements = await page.locator('svg [data-id]');
    const dataCount = await dataElements.count();
    console.log(`Elements with data-id: ${dataCount}`);
  });

  test('Search SVG elements by partial text match', async () => {
    // Find text containing specific substring
    const labelElements = await page.locator('svg text:has-text("Value")');
    await expect(labelElements).toBeVisible();

    // Get all text and filter
    const allText = await page.locator('svg text');
    const textContents: string[] = [];
    
    for (let i = 0; i < await allText.count(); i++) {
      const text = await allText.nth(i).textContent();
      if (text) textContents.push(text);
    }
    console.log('All SVG text content:', textContents);
  });

  // ==================== SVG ASSERTION EXAMPLES ====================

  test('SVG element assertions', async () => {
    const svg = await page.locator('svg');

    // Basic assertions
    await expect(svg).toBeVisible();
    await expect(svg).toBeInViewport();
    await expect(svg).toHaveAttribute('viewBox');

    // Count assertions
    const circles = await page.locator('svg circle');
    await expect(circles).toHaveCount(await circles.count());

    // Class assertions
    const circle = circles.first();
    // await expect(circle).toHaveClass('chart-element');

    // Attribute assertions
    // await expect(circle).toHaveAttribute('fill', /^#[0-9A-F]{6}$/i);
  });

  // ==================== SVG WITH ACCESSIBLE NAMES ====================

  test('Select SVG elements using accessibility', async () => {
    // Select by role
    const graphicsElements = await page.locator('[role="img"]');
    await expect(graphicsElements).toBeVisible();

    // Select by accessible name
    const svgByName = await page.locator('svg[aria-label="Chart"]');
    // await expect(svgByName).toBeVisible();

    // Select by describedby
    const descriptionId = await page.locator('svg[aria-describedby]');
    // await expect(descriptionId).toBeVisible();
  });
});
