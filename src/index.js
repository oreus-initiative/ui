// Inputs
import { Button } from "./components/1_inputs/Button/Button";
import { Form } from "./components/1_inputs/Form/Form";
import { FormField } from "./components/1_inputs/FormField/FormField";

// Display
import { Avatar } from "./components/2_display/Avatar/Avatar";
import { AvatarGroup } from "./components/2_display/AvatarGroup/AvatarGroup";
import { Badge } from "./components/2_display/Badge/Badge";
import { Label } from "./components/2_display/Label/Label";
import { Separator } from "./components/2_display/Separator/Separator";

// Feedback
import { Alert } from "./components/3_feedback/Alert/Alert";
import { Backdrop } from "./components/3_feedback/Backdrop/Backdrop";
import { Progress } from "./components/3_feedback/Progress/Progress";
import { Skeleton } from "./components/3_feedback/Skeleton/Skeleton";
import { Toast } from "./components/3_feedback/Toast/Toast";

// Containers
import { AppBar } from "./components/4_containers/AppBar/AppBar";
import { Card } from "./components/4_containers/Card/Card";
import { Modal } from "./components/4_containers/Modal/Modal";
import { Sidebar } from "./components/4_containers/Sidebar/Sidebar";

// Navigation
import { Breadcrumbs } from "./components/5_navigation/Breadcrumbs/Breadcrumbs";
import { Pagination } from "./components/5_navigation/Pagination/Pagination";
import { Stepper } from "./components/5_navigation/Stepper/Stepper";
import { Tabs } from "./components/5_navigation/Tabs/Tabs";

// Types
import { BadgeVariant } from "./interfaces/BadgeVariant";
import { ButtonVariant } from "./interfaces/ButtonVariant";
import { Color } from "./interfaces/Color";
import { Size } from "./interfaces/Size";

module.exports = {
  inputs: {
    Button,
    Form,
    FormField
  },
  display: {
    Avatar,
    AvatarGroup,
    Badge,
    Label,
    Separator
  },
  feedback: {
    Alert,
    Backdrop,
    // Progress,    // Not implemented
    // Skeleton,    // Not implemented
    // Toast,       // Not implemented
  },
  containers: {
    // AppBar,      // Not implemented
    Card,
    Modal,
    // Sidebar,     // Not implemented
  },
  navigation: {
    // Breadcrumbs, // Not implemented
    // Pagination,  // Not implemented
    // Stepper,     // Not implemented
    // Tabs         // Not implemented
  },
  types: {
    BadgeVariant,
    ButtonVariant,
    Color,
    Size
  }
}
